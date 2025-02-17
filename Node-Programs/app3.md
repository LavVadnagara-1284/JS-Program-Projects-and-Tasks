# Node.js HTTP Server Notes

## Overview
This code creates an HTTP server using Node.js that handles different routes and methods, processes form data, and writes to a file asynchronously.

## Code Breakdown with Detailed Function and Argument Explanations

### Importing Required Modules
```js
const http = require('http');
const fs = require('fs');
```
- `http` module: Provides utilities to create an HTTP server.
- `fs` module: Used for file system operations such as reading and writing files.

### Creating the Server
```js
const server = http.createServer((req, res) => {
```
- `http.createServer(callback)`: Creates an HTTP server.
  - `callback(req, res)`: Handles incoming requests and sends responses.
  - `req`: The request object containing details like method and URL.
  - `res`: The response object used to send back data.

### Extracting URL and Method
```js
const url = req.url;
const method = req.method;
```
- `req.url`: Stores the requested URL.
- `req.method`: Stores the HTTP method (GET, POST, etc.).

### Handling the Root Route (`/`)
```js
if (url === '/') {
    res.write('<html>')
    res.write('<head><title>My Third Page</title></head>')
    res.write('<body> <h1>Hello!</h1> <form action="/message" method="POST"><input type=text name="message"><button type="submit">Send</button></form> </body>')
    res.write('</html>')
    return res.end();
}
```
- Checks if the requested URL is `/`.
- Responds with an HTML form allowing the user to submit data.
- `res.write(data)`: Writes the given data into the response.
- `res.end()`: Ends the response process.

### Handling the `/message` Route with `POST` Method
```js
if (url === '/message' && method === 'POST') {
    const body = [];
```
- Checks if the request URL is `/message` and method is `POST`.
- Initializes an empty array `body` to store incoming data chunks.

### Listening for Data Chunks
```js
req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
});
```
- `req.on(event, callback)`: Listens for events.
  - `'data'`: Triggered when a new chunk of data is received.
  - `callback(chunk)`: Called with the received data chunk.
- `console.log(chunk)`: Logs each received data chunk.
- `body.push(chunk)`: Stores each chunk in the `body` array.

### Processing the Received Data
```js
return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
```
- `req.on('end', callback)`: Executes when all data has been received.
- `Buffer.concat(body).toString()`: Combines chunks into a full string.
- `parsedBody.split('=')[1]`: Extracts the user input from the form data.

### Writing to a File Asynchronously
```js
fs.writeFile('JS-Practice-Projects-and-Tasks/Node-Programs/Message.txt', message, (err) => {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
});
```
- `fs.writeFile(path, data, callback)`: Writes data to a file asynchronously.
  - `path`: File location (`Message.txt`).
  - `data`: Message content extracted from the request.
  - `callback(err)`: Executes when writing is complete; handles errors if any.
- `res.statusCode = 302;`: Sets the response status code to `302` (redirect).
- `res.setHeader('Location', '/');`: Redirects the user back to `/`.
- `res.end();`: Ends the response.

### Default Response for Other Routes
```js
res.setHeader('Content-Type', 'text/html');
res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello from the Node js</h1></body>')
res.write('</html>')
res.end();
```
- If no matching route is found, a default HTML page is sent.
- `res.setHeader('Content-Type', 'text/html');`: Ensures the browser interprets the response as HTML.

### Starting the Server
```js
server.listen(3000);
```
- `server.listen(port)`: Starts the server on the specified port (`3000`).

