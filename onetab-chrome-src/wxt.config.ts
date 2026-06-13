import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "tinyglobby";
import { defineConfig } from "wxt";

const sourceManifest = JSON.parse(
  readFileSync(new URL("./manifest.json", import.meta.url), "utf8"),
);

const { manifest_version: manifestVersion, ...manifest } = sourceManifest;
const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  manifestVersion,
  srcDir: "src",
  manifest,
  hooks: {
    "build:publicAssets": (_, files) => {
      const staticFiles = [
        "*.html",
        "*.css",
        "ext-onetab-concatenated-sources-*.js",
        "_locales/**/*.json",
        "fonts/**/*.woff",
        "images/**/*.png",
      ];

      files.push(
        ...globSync(staticFiles, { cwd: root, expandDirectories: false }).map((file) => ({
          absoluteSrc: resolve(root, file),
          relativeDest: file,
        })),
      );
    },
  },
});
