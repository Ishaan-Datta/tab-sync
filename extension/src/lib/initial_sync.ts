// gets called when the extension finishes its connection

// check if any of the incoming changes were applied on the same object (id), then on the same field (operation),
// override those changes

// should also check the local backup for anything that failed to get synced, not sure if you should send the missed changes to server first,
// or pull upstream changes down?
