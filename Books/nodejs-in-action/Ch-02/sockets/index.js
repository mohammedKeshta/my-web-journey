const net = require('net')

net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write(data)
    })
}).listen(8000)
