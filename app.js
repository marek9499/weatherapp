const express = require('express')
const expbs = require('express-handlebars');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const routes = require('./routes/api')
const port = (process.argv.slice(2).length == 1) ? process.argv.slice(2)[0] : 5000;
const app = express()

app.set('view engine', '.hbs');
app.engine('.hbs', expbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.use(bodyParser.json())
app.use(cookieParser());
app.use('/api', routes);
app.use('/public', express.static('public'))


app.get('/', function(req, res, next) {
    res.render('home.hbs', {
        appPort: port
    });
});

app.get('*', (req, res) => {
    res.send("brak");
});

app.listen(port, () => {
    console.log(`listening for request is now live at port ${port}`);
});