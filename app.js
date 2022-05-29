const express = require('express');

const mongoose = require('mongoose');

const app = express();

const {
  NODE_ENV,
  serverdb,
  PORT = 3000,
} = process.env;

// адрес базы данных в production-режиме берётся из process.env
mongoose.connect(NODE_ENV === 'production' ? serverdb : 'mongodb://localhost:27017/bitfilmsdb');

app.listen(PORT, () => {
// Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
