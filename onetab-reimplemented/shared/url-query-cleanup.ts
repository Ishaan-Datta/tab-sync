// Shared URL query pruning used by list/search indexing in OneTab page bundles.
(function () {
  function createOneTabUrlQueryCleanup() {
    function cleanUrlForSearch(url: string) {
      if (url.startsWith("data:")) {
        let slashIndex = url.indexOf("/");
        return slashIndex ? url.substring(0, slashIndex + 1) : "data:";
      }
      const original = String(url);
      let base = original,
        query = "",
        hash = "";
      const hashIndex = base.indexOf("#");
      hashIndex !== -1 && ((hash = base.slice(hashIndex)), (base = base.slice(0, hashIndex)));
      const queryIndex = base.indexOf("?");
      queryIndex !== -1 && ((query = base.slice(queryIndex + 1)), (base = base.slice(0, queryIndex)));
      let parsed: URL | null;
      try {
        parsed = new URL(original);
      } catch {
        parsed = null;
      }
      const searchParams = importantSearchParams(parsed),
        likelyUsefulParams = new Set([
          "q",
          "query",
          "search",
          "keyword",
          "keywords",
          "text",
          "title",
          "subject",
          "s",
          "url",
          "u",
          "source",
          "lang",
          "hl",
          "tbm",
          "start",
          "first",
          "as_sdt",
        ]),
        noisyWhenEncoded = new Set([
          "gclid",
          "fbclid",
          "msclkid",
          "utm_id",
          "utm_term",
          "utm_content",
          "ved",
          "ei",
          "sca_esv",
          "clid",
          "lst",
          "show-uid",
        ]),
        alwaysNoisyParams = new Set([
          "gclid",
          "fbclid",
          "msclkid",
          "utm_id",
          "utm_term",
          "utm_content",
          "sca_esv",
          "ved",
          "ei",
          "clid",
          "lst",
          "ali_refid",
          "show-uid",
        ]);
      if (!query) return base + hash;
      const pieces = query.split("&").filter((piece) => piece.length > 0),
        kept = [];
      for (const piece of pieces) {
        const equalsIndex = piece.indexOf("="),
          rawKey = equalsIndex === -1 ? piece : piece.slice(0, equalsIndex),
          rawValue = equalsIndex === -1 ? "" : piece.slice(equalsIndex + 1),
          key = decodeQueryComponent(rawKey).toLowerCase(),
          value = decodeQueryComponent(rawValue);
        if (searchParams) {
          searchParams.has(key) && kept.push(piece);
          continue;
        }
        if (isSohuTrackingParam(parsed, key) || alwaysNoisyParams.has(key)) continue;
        (likelyUsefulParams.has(key) || !looksLikeTrackingToken(value, key, noisyWhenEncoded)) && kept.push(piece);
      }
      return kept.length ? base + "?" + kept.join("&") + hash : base + hash;
    }

    function decodeQueryComponent(value: string | null | undefined) {
      if (value == null) return "";
      const withSpaces = String(value).replace(/\+/g, " ");
      try {
        return decodeURIComponent(withSpaces);
      } catch {
        return withSpaces;
      }
    }

    function importantSearchParams(url: URL | null) {
      if (!url) return null;
      const hostname = (url.hostname || "").toLowerCase(),
        pathname = (url.pathname || "").toLowerCase();
      return /(^|\.)google\./.test(hostname) &&
        pathname.startsWith("/search") &&
        hostname !== "scholar.google.com"
        ? new Set(["q", "tbm", "start", "hl"])
        : hostname === "scholar.google.com" && pathname.startsWith("/scholar")
          ? new Set(["q", "hl", "as_sdt"])
          : hostname === "www.bing.com" && pathname.startsWith("/search")
            ? new Set(["q", "first"])
            : /(^|\.)yandex\./.test(hostname) && pathname.includes("/search")
              ? new Set(["text", "lr", "win"])
              : hostname === "search.yahoo.com" && pathname.startsWith("/search")
                ? new Set(["p"])
                : null;
    }

    function isSohuTrackingParam(url: URL | null, key: string) {
      if (!url) return !1;
      const hostname = (url.hostname || "").toLowerCase();
      return !!(key === "spm" && (hostname === "sohu.com" || hostname.endsWith(".sohu.com")));
    }

    function looksLikeTrackingToken(value: string, key: string, noisyKeys: Set<string>) {
      if (value.length <= 12 || /[^\x00-\x7F]/.test(value) || /^\d+$/.test(value)) return !1;
      const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value),
        hex = /^[0-9a-f]{16,}$/i.test(value),
        base64 = /^[A-Za-z0-9+/]{24,}={0,2}$/.test(value),
        base64Url = /^[A-Za-z0-9\-_]{24,}={0,2}$/.test(value),
        jwt = /^[A-Za-z0-9\-_]{10,}\.[A-Za-z0-9\-_]{10,}(\.[A-Za-z0-9\-_]{10,})?$/.test(value);
      if (uuid || hex || base64 || base64Url || jwt || (/[A-Za-z0-9+/_\-]{24,}={0,2}/.test(value) && noisyKeys.has(key)))
        return !0;
      if (/^[A-Za-z0-9._\-]+$/.test(value) && !/\s/.test(value) && value.length >= 20) {
        const letters = value.match(/[A-Za-z]/g) || [],
          vowels = value.match(/[AEIOUYaeiouy]/g) || [],
          vowelRatio = letters.length ? vowels.length / letters.length : 0;
        let caseTransitions = 0;
        for (let index = 1; index < value.length; index++)
          (/[A-Z]/.test(value[index - 1]) && /[a-z]/.test(value[index]) && caseTransitions++,
            /[a-z]/.test(value[index - 1]) && /[A-Z]/.test(value[index]) && caseTransitions++);
        const parts = value.split(/[-_.]/).filter((part) => part.length > 0),
          manyShortParts = parts.length >= 6 && parts.every((part) => part.length <= 12),
          hasWordPart = parts.some((part) => /[A-Za-z]{3,}/.test(part));
        if ((vowelRatio < 0.25 && caseTransitions >= 3 && !manyShortParts && !hasWordPart) || (noisyKeys.has(key) && vowelRatio < 0.35 && !manyShortParts && !hasWordPart))
          return !0;
      }
      return (
        /\s/.test(value) ||
          (/[-_.]/.test(value) && value.split(/[-_.]/).some((part) => /[A-Za-z]{3,}/.test(part))),
        !1
      );
    }

    return { cleanUrlForSearch };
  }

  (globalThis as any).createOneTabUrlQueryCleanup = createOneTabUrlQueryCleanup;
})();
