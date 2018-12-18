const express = require('express')
const app = express()

app.use('/home', (req, res, next) => {
    console.log('This one is from first middleware')
    res.send('This is from home Route')
    next()
})

app.use('/', (req, res, next) => {
    console.log('This one is from second middleware')
    res.send('<h1>This one is from second middleware</h1>')
})

app.listen(3000)