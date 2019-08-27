const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: [] })
  .write()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.render('index', {
    name: 'Nodejs'
}));
app.get('/users', (req, res) => res.render('users/index', {
    users: db.get('users').value()
}))
app.get('/users/create', (req, res) => res.render('users/create'));
app.post('/users/create', (req, res) => {
    db.get('users').push(req.body).write();
    res.redirect('/users');
})

app.get('/users/search', (req, res) => {
    var q = req.query.q;
    var matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))