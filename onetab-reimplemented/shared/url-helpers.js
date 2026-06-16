// Shared URL comparison helpers extracted from the original bundles.
(function () {
  function createOneTabUrlHelpers({ normalizeText, normalizeUrl }) {
    function trimTrailingDotOrComma(value) {
      return (
        [...".,"].some((suffix) => value.endsWith(suffix)) &&
          (value = value.substring(0, value.length - 1)),
        value
      );
    }

    function substringAfter(value, marker) {
      if (!value) return value;
      const index = value.indexOf(marker);
      return (
        index !== -1 && (value = value.substring(index + marker.length)),
        value
      );
    }

    function stripProtocol(value) {
      return substringAfter(value, "://");
    }

    function equalIgnoringProtocol(left, right) {
      return (
        (left = stripProtocol(left)),
        (right = stripProtocol(right)),
        left === right
      );
    }

    function safeNormalizeText(value) {
      if (!value || typeof value != "string") return "";
      try {
        return normalizeText(value);
      } catch {
        return "";
      }
    }

    function canonicalizeTextAsUrl(value) {
      const text = safeNormalizeText(value);
      if (!text) return "";
      const url = text.includes("://") ? text : `https://${text}`;
      let normalizedUrl = normalizeUrl(url);
      return (
        normalizedUrl.endsWith("/") &&
          (normalizedUrl = normalizedUrl.substring(
            0,
            normalizedUrl.length - 1,
          )),
        stripProtocol(normalizedUrl)
      );
    }

    function areUrlLikeEqual(left, right) {
      const normalizedLeft = safeNormalizeText(left);
      const normalizedRight = safeNormalizeText(right);
      return !normalizedLeft || !normalizedRight
        ? false
        : equalIgnoringProtocol(normalizedLeft, normalizedRight)
          ? true
          : canonicalizeTextAsUrl(normalizedLeft) ===
            canonicalizeTextAsUrl(normalizedRight);
    }

    function isYouTubeUrl(value) {
      try {
        const hostname = new URL(normalizeUrl(value)).hostname.toLowerCase();
        return (
          hostname === "youtube.com" ||
          hostname.endsWith(".youtube.com") ||
          hostname === "youtu.be" ||
          hostname.endsWith(".youtu.be")
        );
      } catch {
        return false;
      }
    }

    function shouldUseCandidateUrl(current, target, candidate) {
      const normalizedCandidate = safeNormalizeText(candidate);
      if (!normalizedCandidate) return false;
      const normalizedCurrent = safeNormalizeText(current);
      return !normalizedCurrent || areUrlLikeEqual(normalizedCurrent, target)
        ? true
        : isYouTubeUrl(target) && normalizedCurrent.toLowerCase() === "youtube"
          ? normalizedCandidate.toLowerCase() !== "youtube" &&
            !areUrlLikeEqual(normalizedCandidate, target)
          : false;
    }

    function safeNonJavascriptUrl(value) {
      const normalizedUrl = normalizeUrl(value);
      if (
        !["javascript:"].some((prefix) =>
          normalizedUrl.toLowerCase().startsWith(prefix),
        )
      ) {
        return normalizedUrl;
      }
    }

    return {
      areUrlLikeEqual,
      canonicalizeTextAsUrl,
      equalIgnoringProtocol,
      isYouTubeUrl,
      safeNonJavascriptUrl,
      safeNormalizeText,
      shouldUseCandidateUrl,
      stripProtocol,
      substringAfter,
      trimTrailingDotOrComma,
    };
  }

  globalThis.createOneTabUrlHelpers = createOneTabUrlHelpers;
})();
