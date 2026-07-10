// Shared import parsing helpers extracted from the original bundles.
(function () {
  interface OneTabImportHelperDependencies {
    combineComparators<T>(
      ...comparators: Array<(left: T, right: T) => number>
    ): (left: T, right: T) => number;
    compareAscendingBy<T>(
      callback: (item: T) => unknown,
    ): (left: T, right: T) => number;
    compareDescendingBy<T>(
      callback: (item: T) => unknown,
    ): (left: T, right: T) => number;
    equalIgnoringProtocol(left: string, right: string | undefined): boolean;
    normalizeImportedText(value: unknown): string;
    normalizeText(value: string | null | undefined): string;
    safeNonJavascriptUrl(value: string): string | undefined;
    stripProtocol(value: string | undefined): string;
    trimTrailingDotOrComma(value: string): string;
  }

  interface OneTabImportedTabItem {
    kt: string | undefined;
    title?: string;
    url?: string;
    Zo?: string[];
    Ja?: string;
  }

  interface OneTabImportHelpers {
    parseImportedTabGroups(source: string): Promise<OneTabImportedTabItem[][]>;
  }

  const blockTextElements = [
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "button",
    "br",
    "canvas",
    "caption",
    "col",
    "colgroup",
    "dd",
    "div",
    "dl",
    "dt",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "map",
    "object",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "progress",
    "section",
    "table",
    "tbody",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "ul",
    "video",
  ];

  function createOneTabImportHelpers({
    combineComparators,
    compareAscendingBy,
    compareDescendingBy,
    equalIgnoringProtocol,
    normalizeImportedText,
    normalizeText,
    safeNonJavascriptUrl,
    stripProtocol,
    trimTrailingDotOrComma,
  }: OneTabImportHelperDependencies): OneTabImportHelpers {
    async function parseImportedTabGroups(source: string) {
      const parsed = new DOMParser().parseFromString(source, "text/html");
      let titlesByUrl = new Map<string | undefined, string | undefined>(
          (await chrome.tabs.query({})).map((tab: any) => [tab.url, tab.title]),
        ),
        linkItems: any[];
      {
        let links: any[] = [];
        [...parsed.querySelectorAll("a")].forEach((link) => {
          let originalUrl = link.href,
            url = safeNonJavascriptUrl(link.href),
            title = normalizeText(
              titlesByUrl.get(originalUrl) ?? link.textContent,
            );
          (equalIgnoringProtocol(title, url) && (title = stripProtocol(title)),
            url && title && links.push({ url: originalUrl, kt: url, title }));
        });
        let byUrl: Record<string, any[]> = links.reduce(
          (groups, link) => ((groups[link.kt] ??= []).push(link), groups),
          {} as Record<string, any[]>,
        );
        linkItems = Object.values(byUrl).map(
          (group) =>
            group.sort(
              combineComparators(
                compareAscendingBy((link: any) =>
                  equalIgnoringProtocol(link.title, link.url),
                ),
                compareDescendingBy((link: any) => link.title.length),
              ),
            )[0],
        );
      }
      if (
        linkItems.some((link) => !equalIgnoringProtocol(link.url, link.title))
      ) {
        return [linkItems];
      }
      {
        const flattenText = (node: any): string =>
          [...node.childNodes].reduce(
            (text, child) =>
              child.nodeType === 3
                ? `${text}${child.textContent}`
                : `${text}${
                    blockTextElements.some(
                      (name) =>
                        name.toUpperCase() === child.tagName?.toUpperCase(),
                    )
                      ? `
${flattenText(child)}`
                      : flattenText(child)
                  }`,
            "",
          );
        let text = flattenText(parsed.documentElement);
        text = normalizeImportedText(text);
        let urlWithOptionalTitle =
            /^(?<url>[a-zA-Z][a-zA-Z0-9+.-]*:(?:\/\/)?\S+)(?: \| ?(?<title>.*))?$/,
          lines = text
            .split(
              `
`,
            )
            .map((line) => normalizeText(line))
            .filter((line) => line.trim());
        if (lines.every((line) => urlWithOptionalTitle.test(line))) {
          let groups: any[][] = [[]];
          if (
            (text
              .split(
                `
`,
              )
              .map((line) => normalizeText(line))
              .forEach((line) => {
                if (!line.trim())
                  groups[groups.length - 1].length && groups.push([]);
                else {
                  let match = line.match(urlWithOptionalTitle);
                  if (match) {
                    let url = safeNonJavascriptUrl(match.groups!.url);
                    if (url) {
                      let title =
                          match.groups!.title ||
                          titlesByUrl.get(match.groups!.url) ||
                          stripProtocol(url),
                        item = { kt: url, title };
                      groups[groups.length - 1].push(item);
                    }
                  }
                }
              }),
            groups.flat().length)
          ) {
            return groups.filter((group) => group.length);
          }
        }
        let urlOnly =
            /^(?![A-Za-z]:[\\/])[a-zA-Z][a-zA-Z0-9+.-]*:(?:\/\/)?\S+$/,
          items: any[] = [];
        for (let index = 0; index < lines.length; index++) {
          let line = lines[index],
            previousItem = items[items.length - 1];
          if (urlOnly.test(line)) {
            let item: any = { kt: safeNonJavascriptUrl(line), Zo: [] };
            items.push(item);
            let previousLine = lines[index - 1] ?? "";
            previousLine && !urlOnly.test(previousLine)
              ? ((item.title = previousLine), previousItem?.Zo.pop())
              : (item.title = titlesByUrl.get(line) || stripProtocol(item.kt));
          } else previousItem?.Zo.push(line);
        }
        items.forEach((item) => {
          ((item.Ja = item.Zo.filter((line: string) => line).join(`
`)),
            item.Ja || delete item.Ja);
        });
        let urlInText =
            /(?<url>(?![A-Za-z]:[\\/])[a-zA-Z][a-zA-Z0-9+.-]*:(?:\/\/)?\S+)/g,
          urls = lines
            .flatMap((line) =>
              [...line.matchAll(urlInText)].map((match) =>
                safeNonJavascriptUrl(trimTrailingDotOrComma(match.groups!.url)),
              ),
            )
            .filter((url): url is string => !!url);
        return (
          (urls = [...new Set(urls)]),
          urls.length > items.length
            ? [urls.map((url) => ({ kt: url, title: stripProtocol(url) }))]
            : [items]
        );
      }
    }

    return { parseImportedTabGroups };
  }

  (globalThis as any).createOneTabImportHelpers = createOneTabImportHelpers;
})();
