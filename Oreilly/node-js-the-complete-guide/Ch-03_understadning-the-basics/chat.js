const net = require('net')

let sockets = []

const s = net.createServer(function (socket) {
    sockets.push(socket)

    socket.on('data', (d) => {
        for (const socket of sockets) {
            if (socket === socket) continue
            socket.write(d)
        }
    })

    socket.on('end', () => {
        const idx = sockets.indexOf(socket)
        sockets.splice(idx, 1)
    })
})


s.listen(3000)