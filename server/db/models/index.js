const Sequelize = ('sequelize')
const User = require('./user')
const {Order, HistoricalItems} = require('./order')
const db = require('../db.js')
const Products = require('./foodProducts')
const Reviews = require('./reviews')

const Favorites = db.define('favorites')

Products.belongsToMany(User, { through: Favorites })
Products.hasMany(Reviews)
Order.belongsTo(User);
HistoricalItems.belongsTo(Order)
Order.hasMany(HistoricalItems);

module.exports = {
  User,
  Order,
  Products,
  Favorites,
  HistoricalItems,
  Reviews
}
