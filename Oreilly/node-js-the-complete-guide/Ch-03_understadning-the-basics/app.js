const http = require('http')

const server = http.createServer(function (req, res)  {
    res.writeHead(200, {'type-content': 'plain/text'})
    res.end('Hello World')
})

server.listen(3000, () => {
    console.log(`Server is running at Port 3000`)
})
