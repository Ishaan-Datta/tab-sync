// Shared search text segmentation helpers extracted from the original bundles.
(function () {
  interface SearchSegment {
    s: string;
    tt: number;
  }

  interface SplitSearchTextOptions {
    text: string;
    ti: string[];
    ei: boolean;
    ii: boolean;
  }

  interface OneTabSearchHelpers {
    createSearchTermRegExp(term: string, ii: boolean, ei: boolean): RegExp;
    splitSearchText(options: SplitSearchTextOptions): SearchSegment[];
    splitSearchTextWithTerm(
      text: string,
      term: string,
      ei: boolean,
      ii: boolean,
    ): SearchSegment[];
  }

  function createOneTabSearchHelpers(): OneTabSearchHelpers {
    function splitSearchText({ text, ti, ei, ii }: SplitSearchTextOptions) {
      let segments = [{ s: text, tt: 0 }];
      return (
        ti
          .sort((left, right) => right.length - left.length)
          .forEach((term) => {
            segments = segments.flatMap(({ s, tt }) =>
              tt ? { s, tt } : splitSearchTextWithTerm(s, term, ei, ii),
            );
          }),
        segments
      );
    }

    function splitSearchTextWithTerm(
      text: string,
      term: string,
      ei: boolean,
      ii: boolean,
    ) {
      const parts = text.split(createSearchTermRegExp(term, ii, ei));
      let offset = 0;
      const segments = parts.map((part) => {
        const s = text.slice(offset, offset + part.length);
        return ((offset += part.length + term.length), { s, tt: 0 });
      });
      return (
        (offset = 0),
        segments.length < 2
          ? segments
          : segments.flatMap(({ s, tt }, index) =>
              index === segments.length - 1
                ? { s, tt }
                : ((offset += s.length),
                  [
                    { s, tt },
                    { s: text.slice(offset, (offset += term.length)), tt: 1 },
                  ]),
            )
      );
    }

    const searchTermRegExpEscapePattern = /[.*+?^${}()|[\]\\]/g;

    function createSearchTermRegExp(term: string, ii: boolean, ei: boolean) {
      const escapedTerm = term.replace(searchTermRegExpEscapePattern, "\\$&");
      return new RegExp(
        ii ? `(?<!\\p{L})${escapedTerm}(?!\\p{L})` : `${escapedTerm}`,
        `ug${ei ? "" : "i"}`,
      );
    }

    return {
      createSearchTermRegExp,
      splitSearchText,
      splitSearchTextWithTerm,
    };
  }

  (globalThis as any).createOneTabSearchHelpers = createOneTabSearchHelpers;
})();
