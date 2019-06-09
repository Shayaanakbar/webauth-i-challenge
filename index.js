// const express = require('express')
// const bcrypt = require('bcrypt')
// const Users = require('./data/dbHelpers')
// const session = require('express-session');
// const SessionStore = require('connect-session-knex')(session);
// // const cors = require('cors');
//
// const restricted = require('./auth/restricted-middleware');
//
// const server = express()
//
// const sessionConfig = {
//   name: 'tiger',
//   secret: 'super secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 60 * 60 * 1000,
//     secure: process.env.NODE_ENV === 'production' ? true : false,
//     httpOnly: true
//   },
//   store: new SessionStore({
//     knex: require('./data/dbConfig'),
//     tablename: 'sessions',
//     sidfieldname: 'sid',
//     createtable: true,
//     clearInterval: 60 * 60 * 10000
//   }),
// }
//
// server.use(express.json())
// server.use(session(sessionConfig))
// server.use(session());
// // server.use(cors());
//
// server.get('/', (req, res) => {
//   res.send('testing')
// })
//
// server.post('/api/register', (req, res) => {
//   const user = req.body
//   user.password = bcrypt.hashSync(user.password, 10);
//   console.log(user)
//   Users.addUser(user)
//     .then(resp => res.json(resp))
//     .catch(err => res.json(err))
// });
//
// server.post('/api/login', (req, res) => {
//   let { username, password } = req.body;
//
//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         req.session.user = user;
//
//         res.status(200).json({
//           message: `Welcome ${user.username}!`,
//         });
//       } else {
//         res.status(401).json({ message: 'Invalid Credentials' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });
//
// server.get('/api/users', (req,res) => {
//   Users.find()
//     .then(response => {
//       res.json(response)
//     })
//     .catch(err => res.send(err));
// });
//
// server.get('/api/logout', restricted, (req, res) => {
//   if (req.session) {
//     req.session.destroy((err) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({message: 'there was an error '});
//       }
//
//       res.end();
//     });
//   } else {
//     res.end();
//   }
// });

const server = require('./api/server');


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
