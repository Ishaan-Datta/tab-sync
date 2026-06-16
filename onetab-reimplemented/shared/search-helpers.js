// Shared search text segmentation helpers extracted from the original bundles.
(function () {
  function createOneTabSearchHelpers() {
    function splitSearchText({ text, ti, ei, ii }) {
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

    function splitSearchTextWithTerm(text, term, ei, ii) {
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

    function createSearchTermRegExp(term, ii, ei) {
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

  globalThis.createOneTabSearchHelpers = createOneTabSearchHelpers;
})();
