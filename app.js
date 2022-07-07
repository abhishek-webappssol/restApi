const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/student '

const app = express()


mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('db connected')
})

app.use(express.json())

const studentRoute = require('./routes/studentRoute')
app.use('/student', studentRoute)


app.listen (9000, () => {
    console.log('server started')
})