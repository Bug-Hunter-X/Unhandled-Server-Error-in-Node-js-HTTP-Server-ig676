# Unhandled Server Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: the lack of proper error handling. The `bug.js` file contains a basic server that fails silently if the port is in use or other network problems occur.  The solution, `bugSolution.js`, shows how to gracefully handle these errors.

## Bug
The `bug.js` file showcases a simple HTTP server without error handling. If you try to run this server on a port that's already in use, the server will crash without providing any informative error messages.

## Solution
The `bugSolution.js` demonstrates a more robust server that utilizes the `'error'` event listener to catch potential issues and log an informative message. This prevents the server from crashing and provides debugging information.