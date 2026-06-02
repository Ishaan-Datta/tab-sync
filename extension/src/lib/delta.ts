// queue that records executed operations to send to the server (naive)

// alternatively this would compute the changes that need to take place by diffing the server output and the current state (doesnt replay overriden actions)

// yeah make sense to keep the queue interface as a actor pattern too, as the UI side makes changes, append operations to the queue to be handled independently

// the queue will try sendign the change to the server, if it didnt go through, retry it on next tick, otherwise add to the unsynced/local backup?
