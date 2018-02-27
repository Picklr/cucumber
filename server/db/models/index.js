const Sequelize = ('sequelize')
const User = require('./user')
const db = require('../db.js')
const Products = require('./foodProducts')




const Favorites = db.define('favorites')

Products.belongsToMany(User, { through: Favorites })




module.exports = {
  User
}
