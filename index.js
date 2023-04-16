const express = require('express')
const app = express();
const path = require ('path');
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({}));

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'html');

// Run python apps
app.use('/runapp', require('./apps/approuter'));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));