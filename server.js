const express = require('express');
const app = express();
const path = require('path');
const PORT =  process. env. PORT||80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('Index');
})

app.post('/query', (req, res) => {
    // res.redirect('https://raajwrites.wordpress.com')
    res.redirect('/');
    let Name = req.body.name
    let Email = req.body.email
    let Query = req.body.query
    console.log("Name : "+ Name + "\nEmail : " + Email + "\nQuery : " + Query+"\n\n");
})

app.listen(PORT, () => {
    console.log('running at https://127.0.0.1:80');
})
