const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {

  productsOrdered: {
    type: Sequelize.ARRAY(Sequelize.TEXT),  //planning to have array of objects with product id and price at time of order
  }

})

module.exports = Order
