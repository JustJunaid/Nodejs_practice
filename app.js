const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    res.send('This is from home Route')
})

app.use('/', (req, res) => {
    res.send('')
})

app.listen(3000)