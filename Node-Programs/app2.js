const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>My Second Page</title></head>')
        res.write('<body> <h1>Hello! this is the second app</h1> <form action="/message" method="POST" ><input type=text><button type="submit" >Send</button></form> </body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from the Node js</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);
