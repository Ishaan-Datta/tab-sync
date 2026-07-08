// Copyright 2026 OneTab Ltd.  All rights reserved.
declare function importScripts(...urls: string[]): void;

importScripts("shared/background.js");
(globalThis as any).runOneTabBackgroundBundle();
