const express = require('express')
const app = express()

app.get('/', (req,res) => res.send('This web app is created by HAI MP32'))
app.get('/greet', (req,res) => res.send('Hi!'))
app.get('/group', (req,res) => res.send('Ready to win! - HAI MP32'))

module.exports = app