const http = require("http");
const url = require("url");

const handler = (req, res) => {
  const parsedURL = url.parse(req.url, true);
  if (parsedURL.pathname === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello, from web-server \n");
  } else {
    res.writeHead(404);
  }
  res.end();
};
const server = http.createServer(handler);
server.listen(8080);
