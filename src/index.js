const express = require('express')
const hit = require('./routes/hit')
// const count = require('./routes/count')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!!")
})
app.get('/hit', hit)
// app.get('/count', count)

app.listen(8000, () =>{
    console.log('App running on port 8000')
})