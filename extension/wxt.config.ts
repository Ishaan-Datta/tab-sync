import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-svelte"],
  // manifest: {
  //   name: 'Tab Sync',
  //   permissions: ['tabs', 'storage'],
  //   options_ui: {
  //     page: 'options.html',
  //     open_in_tab: true,
  //   },
  // background: { scripts: ["lib/stomp.min.js", "background.js"], persistent: true },
  // },
});
