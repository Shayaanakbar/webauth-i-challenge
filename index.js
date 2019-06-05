const express = require('express')
const bcrypt = require('bcrypt')
const Users = require('./data/dbHelpers')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('testing')
})

server.get('/api/users', (req,res) => {
  Users.find()
    .then(response => {
      res.json(response)
    })
    .catch(err => res.send(err));
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
