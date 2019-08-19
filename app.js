const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'pug')
app.set('views', './views')

let users = [
    { id: 1, name: 'Bao' },
    { id: 2, name: 'Eden' },
    { id: 3, name: 'Frank' },
    { id: 4, name: 'Wilian' },
    { id: 5, name: 'Cech' },
]

app.get('/', (req, res) => res.render('index', {
    name: 'Nodejs'
}));
app.get('/users', (req, res) => res.render('users/index', {
    users: users
}))

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