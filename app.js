
const morgan = require('morgan')
const express = require('express')
const layout = require('./views/layout')
const { db } = require('./models');
const app = express();

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send(layout(''));
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log('App listening in on port');
})
