const http = require('http')
const fs = require('fs')

function getTitles(res) {
    fs.readFile('./titles.json', (err, data) => {
        if (err) return hasError(err, res)
      getTemplates(JSON.parse(data.toString()), data.toString(), res)
    })
}

function getTemplates(titles, res) {
    fs.readFile('./template.html', (err, data) => {
        if (err) return hasError(err, res)
        formatHTML(titles, data.toString(), res)
    })
}

function formatHTML(titles, tmpl, res) {
    const html = tmpl.replace('%', titles.join('</li><li>'))
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
}

function hasError(err, res) {
    console.log(err.message)
    res.end('Server Error')
}

http.createServer((req, res) => {
    if (req.url === '/') {
        getTitles(res)
    }
}).listen(8000, () => {
    console.log(`Server is running at port ${8000}`)
})
