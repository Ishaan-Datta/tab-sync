// Shared text normalization helpers extracted from the original bundles.
(function () {
  interface OneTabTextHelpers {
    normalizeImportedText(value: unknown): string;
  }

  function createOneTabTextHelpers(): OneTabTextHelpers {
    function normalizeImportedText(value: unknown) {
      if (value == null) return "";
      let text = String(value);
      typeof text.normalize == "function" && (text = text.normalize("NFKC"));
      const unicodeSpacePattern =
        /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
      text = text.replace(unicodeSpacePattern, " ");
      const zeroWidthPattern = /[\u200B-\u200D\u2060\uFEFF]/g;
      return (
        (text = text.replace(zeroWidthPattern, "")),
        (text = text.replace(
          /\r\n?/g,
          `
`,
        )),
        (text = text
          .split(
            `
`,
          )
          .map((line) => line.replace(/[ \t]+$/g, "")).join(`
`)),
        text
      );
    }

    return { normalizeImportedText };
  }

  (globalThis as any).createOneTabTextHelpers = createOneTabTextHelpers;
})();
