const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('index', {
    name: 'Nodejs'
}));
app.get('/users', (req, res) => res.render('users/index', {
    users: [
        { id: 1, name: 'Bao' },
        { id: 2, name: 'Eden' },
        { id: 3, name: 'Frank' },
        { id: 4, name: 'Wilian' },
        { id: 5, name: 'Cech' },
    ]
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))