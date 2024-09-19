const express = require('express');
const morgan = require('morgan');

const tasRoutes = require('./routes/tasks.routes')

const app = express();
app.use(morgan('dev'))

app.use(tasRoutes)

app.listen(3000)
console.log("Servidor en puerto 3000")
