const http = require('http')

const rq = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("<html><body><h1>Hello from Home Page.</h1><form method='POST' action='/display_name'><input type='text' name='username' placeholder='Enter username' required><button type='submit'>Add My Name</button></form></body></html>")
        res.end()
    }
    else if (req.url === '/users') {
        const names = ['Abid', 'Junaid', 'Naved', 'Suhail']
        res.write("<html><body><ul>")
        for (name of names) {
            res.write("<li>")
            res.write(name)
            res.write("</li>")
        }
        res.write("</ul></body></html>")
        res.end()
    }
    else if (req.url === '/display_name') {
        req.on('data', chunk => {
            console.log(chunk.toString().split('=')[1])
            res.write('<html><body>')
            res.write('<h3>Your name is: </h3>')
            res.write(chunk.toString().split('=')[1])
            res.write('</body></html>')
            res.end()
        })
    }
})

rq.listen(3000)