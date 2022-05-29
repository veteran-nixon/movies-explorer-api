const express = require('express');

require('dotenv').config();

const mongoose = require('mongoose');

const routes = require('./routes');

const AllErrors = require('./middlewares/all-errors');

const {
  NODE_ENV,
  serverdb,
  PORT = 3000,
} = process.env;

// адрес базы данных в production-режиме берётся из process.env
mongoose.connect(NODE_ENV === 'production' ? serverdb : 'mongodb://localhost:27017/bitfilmsdb');

const app = express();

app.use(express.json());

app.use(routes);

app.use(AllErrors);

app.listen(PORT, () => {
// Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
