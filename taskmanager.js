const express = require('express')
const server = express()
const bp = require("body-parser")
server.use(bp.json())

const createTask = require('./routes/createTask')
const findTask = require('./routes/findTask')
const deleteTask = require('./routes/deleteTask')

server.use('/', createTask)
server.use('/', findTask)
server.use('/', deleteTask)

server.listen(3001, () => console.log('server started'))