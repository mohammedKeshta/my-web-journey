const http = require("http");
const url = require("url");

const handler = (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello, from web-server \n");
  } else if (pathname === "/time") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(`Time Now is  ${new Date().toString()} \n`);
  } else if (pathname === "/hello") {
    if (!query.name) {
      res.writeHead(400, { "Content-type": "text/plain" });
      return res.end();
    }
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(`Hello, ${query.name}`);
  } else if (pathname.startsWith("/user/")) {
    const regex = new RegExp("/user/(.+)");
    const matches = regex.exec(pathname);
    if (!matches && !matches[1]) {
      res.writeHead(400, { "Content-type": "text/plain" });
      return res.end();
    }
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(`Hello,  this is page profile of ${matches[1]}`);
  } else {
    res.writeHead(404);
  }
  res.end();
};
const server = http.createServer(handler);
server.listen(8080);
