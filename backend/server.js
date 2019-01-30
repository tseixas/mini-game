const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const playerRoute = require('./routes/player.route');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/player', playerRoute);
let port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('API is running'));

app.listen(port, () => console.log('Server:  http://localhost:' + port));
