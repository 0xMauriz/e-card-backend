const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const cardsRouter = require('./controllers/cardsController.js');
const connection = require("./data/moviesData.js");