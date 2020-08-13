const addPage = require("./addPage");
const editPage = require("./editPage");
const main = require("./main");
const userList = require("./userList");
const userPages = require("./userPages");
const wikiPage = require("./wikiPage");
// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wikistack');

// module.exports = {
//   db
// }

module.exports = { addPage, editPage, main, userList, userPages, wikiPage };
