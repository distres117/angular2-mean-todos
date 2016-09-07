var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    index = require('./routes'),
    morgan = require('morgan'),
    app = express();

app.use(express.static('public'));
// app.use(express.static('node_modules'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(index);

app.listen(3000, function(){
    console.log('Server has started on 3000');
})