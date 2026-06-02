// need to interpret state so you can tell if operations can be applied to the list of tabs, otherwise reject with info

// on handshake you will get last update time, you can determine if that time is beyond the threshold, if so, you can send command for manual resync (forward entire JSON blob of all tabs and just reset the local one (it will just shift all its local state into orphan group for user to deal with))
// otherwise you will grab all the operations and broadcast to the other devices (for each device which doesnt have the same device ID, forward the operation)

// so dont need to have a object storing the events missed per device, just browse based on the last updated time
//
