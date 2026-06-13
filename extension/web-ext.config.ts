import { defineWebExtConfig } from "wxt";

// TODO: make this part of nix shell and refernce directly
export default defineWebExtConfig({
  binaries: {
    firefox: "/home/ishaan/.nix-profile/bin/firefox",
  },
});
