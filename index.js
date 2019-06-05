const express = require('express')
const bcrypt = require('bcrypt')
const Users = require('./data/dbHelpers')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('testing')
})

server.post('/api/register', (req, res) => {
  const user = req.body
  user.password = bcrypt.hashSync(user.password, 10);
  console.log(user)
  Users.addUser(user)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // we compare the password guess against the database hash
  Users.findBy({ username })
    .first()
    .then(user => {
      //
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/api/users', (req,res) => {
  Users.find()
    .then(response => {
      res.json(response)
    })
    .catch(err => res.send(err));
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
