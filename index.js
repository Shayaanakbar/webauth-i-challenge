const express = require('express')
const bcrypt = require('bcrypt')
const Users = require('./data/dbHelpers')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('testing')
})


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
