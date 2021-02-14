console.log("hello from Node")

const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/text'})
  res.end('Hello from node')
})

server.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port)
});