
const morgan = require('morgan')
const express = require('express')
const layout = require('./views/layout')
const { db, Page, User } = require('./models');
const app = express();
const wikiRouter = require('./routes/wiki')
const usersRouter = require('./routes/users')





db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))


// Plugging the routers
app.use('/wiki', wikiRouter);
// app.use('/users', usersRouter)

// app.get('/', (req, res) => {
//   res.send(layout(''));
//   res.redirect('wiki')
// })


app.get('/', (req, res) => {
  res.redirect('wiki')
})

const PORT = 3000;
const init = async () => {
  await db.sync({force: true})

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}
init()


