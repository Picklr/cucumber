const Sequelize = require('sequelize')
const db = require('../db.js')

const Reviews = db.define('reviews', {
  body: { type: Sequelize.STRING },
  rating: { type: Sequelize.STRING, allowNull:true}

})

module.exports = Reviews
