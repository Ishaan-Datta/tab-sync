import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { globSync } from "tinyglobby";
import { defineConfig } from "wxt";

const sourceManifest = JSON.parse(
  readFileSync(new URL("./manifest.json", import.meta.url), "utf8"),
);

const { manifest_version: manifestVersion, ...manifest } = sourceManifest;
const root = dirname(fileURLToPath(import.meta.url));
const generatedPublicRoot = resolve(root, ".wxt/generated-public");

export default defineConfig({
  manifestVersion,
  srcDir: "src",
  manifest,
  hooks: {
    "build:publicAssets": (_, files) => {
      const staticFiles = [
        "*.html",
        "*.css",
        "shared/**/*.js",
        "ext-onetab-concatenated-sources-*.js",
        "_locales/**/*.json",
        "fonts/**/*.woff",
        "images/**/*.png",
      ];

      files.push(
        ...globSync(staticFiles, { cwd: root, expandDirectories: false }).map(
          (file) => ({
            absoluteSrc: resolve(root, file),
            relativeDest: file,
          }),
        ),
      );

      for (const file of globSync(
        ["shared/**/*.ts", "ext-onetab-concatenated-sources-*.ts"],
        {
          cwd: root,
          expandDirectories: false,
        },
      )) {
        const source = readFileSync(resolve(root, file), "utf8");
        const output = ts.transpileModule(source, {
          compilerOptions: {
            module: ts.ModuleKind.None,
            target: ts.ScriptTarget.ES2020,
          },
          fileName: file,
        }).outputText;
        const relativeDest = file.replace(/\.ts$/, ".js");
        const absoluteSrc = resolve(generatedPublicRoot, relativeDest);
        mkdirSync(dirname(absoluteSrc), { recursive: true });
        writeFileSync(absoluteSrc, output);
        files.push({ absoluteSrc, relativeDest });
      }
    },
  },
});
