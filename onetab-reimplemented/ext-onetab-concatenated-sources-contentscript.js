// Copyright 2026 OneTab Ltd.  All rights reserved.
function hasNonBlankText(value) {
  return !(value == null || !value || !(value + "").trim());
}

function findMatchingAnchorText(targetUrl, node, direction) {
  if (!node) return null;

  try {
    if (node.tagName === "A") {
      if (node.href === targetUrl && hasNonBlankText(node.textContent)) {
        return node.textContent;
      }
    } else if (direction === "down") {
      if (node.childNodes) {
        for (const childNode of Array.from(node.childNodes)) {
          const childText = findMatchingAnchorText(
            targetUrl,
            childNode,
            "down",
          );
          if (hasNonBlankText(childText)) return childText;
        }
      }
    } else if (direction === "up") {
      if (node.parentElement) {
        return findMatchingAnchorText(targetUrl, node.parentElement, "up");
      }
    } else if (direction === "both") {
      let matchingText = findMatchingAnchorText(targetUrl, node, "down");
      if (!matchingText)
        matchingText = findMatchingAnchorText(targetUrl, node, "up");
      if (hasNonBlankText(matchingText)) return matchingText;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

function normalizeText(value) {
  return value && value.replace(/\s\s+/g, " ").trim();
}

function getLinkTitle(targetUrl) {
  try {
    let selectedLinkText;

    try {
      const selectedNode = window.getSelection().extentNode;
      selectedLinkText = findMatchingAnchorText(
        targetUrl,
        selectedNode,
        "both",
      );
      selectedLinkText = normalizeText(selectedLinkText);
    } catch (error) {
      console.log(error);
    }

    if (selectedLinkText) return selectedLinkText;

    const links = document.links;
    for (let index = 0; index < links.length; index++) {
      const linkUrl = links[index].href;
      if (new URL(linkUrl, document.baseURI).href === targetUrl) {
        const linkText = normalizeText(links[index].textContent);
        if (!linkText) continue;
        return linkText;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return targetUrl;
}

if (!window.t) {
  window.t = true;

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "getLinkTitle") {
      const url = message.url;
      const title = getLinkTitle(url);
      sendResponse({ url, title });
    }
  });
}
