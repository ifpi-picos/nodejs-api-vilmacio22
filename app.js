const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const mongo = require('./config/mongoodb');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);
mongo();

app.listen(3000, ()=> console.log('APP online...'))
