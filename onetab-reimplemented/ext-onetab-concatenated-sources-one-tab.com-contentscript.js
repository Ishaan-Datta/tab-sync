// Copyright 2026 OneTab Ltd.  All rights reserved.
window.addEventListener("message", async (event) => {
  if (
    event.source !== window ||
    event.origin !== window.location.origin ||
    event.data?.direction !== "page-to-extension"
  ) {
    return;
  }

  const { id, request } = event.data;

  try {
    const response = await chrome.runtime.sendMessage({
      type: "contentscript-to-extension",
      request,
    });

    event.source.postMessage(
      { direction: "extension-to-page", id, response },
      event.origin,
    );
  } catch (error) {
    console.error(error);
    event.source.postMessage(
      { direction: "extension-to-page", id, error: error.message },
      event.origin,
    );
  }
});

window.postMessage(
  { __ONETAB_EXTENSION_PRESENT: true },
  window.location.origin,
);
