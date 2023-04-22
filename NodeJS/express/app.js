const express = require('express')
const ExpressLayouts = require('express-ejs-layouts')
const morgan = require('morgan') 
const app = express()
const port = 3000



// use ejs
app.set('view engine', 'ejs')
app.use(ExpressLayouts)
app.use(morgan('dev'))

app.use(express.static('public'))

app.use((req, res, next)=> {
console.log('asdsss')
next()
})


app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama : 'Fuji Halim Rabbani',
            email : 'racun1601@gmail.com',
        },
        {
            nama : 'Walter Niholas',
            email : 'WalterEz12345@gmail.com',
        },
    ]
    res.render('index', {
        nama : 'Fuji',
        title : 'Home',
        mahasiswa,
        layout: 'layouts/main-layout'
})
})
app.get('/about',  (req, res) => {
    res.render('about',{
        title : 'about',
        layout: 'layouts/main-layout',
    },
    )
})
app.get('/contact', (req, res) => {
    res.render('contact',{
        title : 'Contact',
        layout: 'layouts/main-layout',
    })
})

app.get('./product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Catogory id : ${req.query.category}`)
})

app.use((req, res) =>{
    res.status(404)
    res.send('<h1> 404 </h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})