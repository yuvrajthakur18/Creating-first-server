const http = require("http");

const port = 8081;

http
    .createServer((request, response) => {
        // callback function
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello, this is from my server</h1><h2>Server is working ... </h2>");
        response.end();
    })
    .listen(port, () => {                                 
        // callback function 
        console.log('NodeJS server started on port ${port}');
    });

    // http://localhost:8081
    