{
  description = "Extension Dev Shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    fenix.url = "github:nix-community/fenix";
    fenix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      fenix,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        fenixPkgs = fenix.packages.${system};

        browsers =
          (builtins.fromJSON (builtins.readFile "${pkgs.playwright-driver}/browsers.json")).browsers;

        chromiumRev = (builtins.head (builtins.filter (x: x.name == "chromium") browsers)).revision;

        rustToolchain = fenixPkgs.combine [
          fenixPkgs.stable.rustc
          fenixPkgs.stable.cargo
          fenixPkgs.stable.clippy
          fenixPkgs.stable.rustfmt
          fenixPkgs.stable.rust-src
          fenixPkgs.stable.rust-std
        ];

        devShell = pkgs.mkShell {
          RUSTC_WRAPPER = "${pkgs.sccache}/bin/sccache";

          PLAYWRIGHT_BROWSERS_PATH = "${pkgs.playwright-driver.browsers}";
          PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
          PLAYWRIGHT_NODEJS_PATH = "${pkgs.nodejs}/bin/node";
          PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH = "${pkgs.playwright-driver.browsers}/chromium-${chromiumRev}/chrome-linux64/chrome";

          buildInputs = [
            rustToolchain
            fenixPkgs.stable.rust-analyzer

            pkgs.lefthook
            pkgs.just
            pkgs.bun
            pkgs.nodejs
            pkgs.chromium
            pkgs.playwright-driver.browsers # -chromium?
          ];

          shellHook = "lefthook install && cd extension && bun install --frozen-lockfile && just";
        };
      in
      {
        devShells.default = devShell;
        packages.devShell = devShell.inputDerivation;
      }
    );
}
