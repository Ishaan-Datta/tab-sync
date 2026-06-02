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

          buildInputs = [
            rustToolchain
            fenixPkgs.stable.rust-analyzer

            pkgs.lefthook
            pkgs.just
            pkgs.bun
            pkgs.nodejs
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
