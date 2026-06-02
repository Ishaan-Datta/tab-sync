// manage the socket connection handling here

// object class that has functions for:
// - takes object (tab or group) as input and the operation, transmits that to the server

// Heartbeat:
// Send WebSocket ping every T seconds.
// Expect pong within D seconds.

// If no pong arrives:
// Treat the connection as dead.
// Close it.
// Reconnect.

// 1. Maintain:
//     - last received pong timestamp
//     - last JSON-RPC response timestamp
// 2. If either exceeds threshold:
//     - Immediately call `websocket.close()`
//     - Discard the socket object
//     - Start reconnection with backoff
// 3. On reconnection:
//     - Assume a **new session**
//     - Re-authenticate / re-subscribe
//     - Re-send necessary state

// would make the background.js for this?

// effectively actor pattern so you have the global object that handles all read/write requests?
// or is this event driven where the messages received are handled async and drive app updates like UI actions?
// async loop for polling this for receive?

// only if the message was received and acknowledges with success do you update the last updated time - should timestamp messages and use that (UTC epoch)

// if message either never received acknowledge or request was bad, you either add the operations to missing operations table (in memory and disk)
// or make notification of conflict (sync should still be successful though) and modified time should go up

// that in memory list of missing operations should maybe have its own interface that makes sure disk and in memory are synced, when an operations needs to get synced
// you will start by sending the first message in the queue first, so that way you will never be skipping messages chronological order

// send each message on 0.05ms delay

// - UIs `browser.runtime.connect()` to background (port)
// `port.postMessage({type:"stateChanged", ...})`
