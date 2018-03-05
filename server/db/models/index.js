const Sequelize = ('sequelize')
const User = require('./user')
const {Order, HistoricalItems} = require('./order')
const db = require('../db.js')
const Products = require('./foodProducts')


const Favorites = db.define('favorites')

Products.belongsToMany(User, { through: Favorites })

Order.belongsTo(User);
HistoricalItems.belongsTo(Order)
Order.hasMany(HistoricalItems);
module.exports = {
  User,
  Order,
  Products,
  Favorites,
  HistoricalItems
}
