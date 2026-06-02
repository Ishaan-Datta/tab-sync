// // - Set:
//     - read deadlines
//     - ping interval
// - If deadline exceeded:
//     - Close the connection
//     - Clean up server-side state for that client

// actor pattern, all reads and writes are handled through the object

// maybe we can try event loop driven architecture for the server? you have a spinning loop with delay that iterates through websockets and listens for them?
// I forget if websockets are event driven or if you need to check them lol...

// remember to encrypt connection with ssl -> WSS?

// use authentication w/ tokens to validate users
// use proper SSL (wss://) for secure transport
// acknowledge message to websocket upon successful operation
// logging for all function calls in debug
