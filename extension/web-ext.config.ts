import { defineWebExtConfig } from "wxt";

// TODO: make this part of nix shell and refernce directly
export default defineWebExtConfig({
  binaries: {
    firefox: "/home/ishaan/.nix-profile/bin/firefox",
    chrome: "/nix/store/mwmmlaalpfnaaknbrh333agk5a01cg68-chromium-146.0.7680.164/bin/chromium",
  },
});
