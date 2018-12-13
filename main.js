const http = require('http')
const fs = require('fs')

const rq = http.createServer((req, res) => {
    url = req.url
    if (url === '/') {
        res.write('<html><head><body><form method="POST"><input type="text" name="name" placeholder="Enter name" autofocus><input type="submit" value="submit"></form></body></head></html>')
        res.end()
        list_to_buffer = []
        req.on('data', (chunk) => {
            list_to_buffer.push(chunk)
        })
        req.on('end', () => {
            value = Buffer.concat(list_to_buffer).toString().split('=')[1]
            fs.writeFileSync('junaid.txt', value)
        })
        }
    })

rq.listen(3000)