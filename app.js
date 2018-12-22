const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)