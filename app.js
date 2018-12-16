const http = require('http')

const rq = http.createServer((req, res) => {
    console.log('server created')
    res.end()
})

rq.listen(3000)