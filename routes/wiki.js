const express = require('express');
const Router = express.Router()
const addPage = require('../views/addPage')
const { Page } = require('../models')



Router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
})

Router.post('/', async (req, res, next) => {
  console.log(req.body)
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
})

Router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = Router;
