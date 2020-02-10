const express = require('express')
const expbs = require('express-handlebars');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const routes = require('./routes/api')
const port = process.env.port = 5500
const app = express()

app.engine('.hbs', expbs({
    extname: '.hbs',
    defaultLayout: null
}));
app.use(bodyParser.json())
app.use(cookieParser());



app.set('view engine', '.hbs');
app.use('/api', routes);
app.use('/public', express.static('public'))
app.get('/', function (req, res, next) {
    res.render('home.hbs',
        {
            showTitle: true,
            foo: "cześć, działa :D"
        });
});

app.get('*', (req, res) => {
    res.send("brak");
});

app.listen(process.env.port || 4000, () => {
    console.log('listening for request is now live');
});