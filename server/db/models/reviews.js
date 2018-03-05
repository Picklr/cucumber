const Sequelize = require('sequelize')
const db = require('../db.js')

const Reviews = db.define('reviews', {
  body: { type: Sequelize.STRING },
  rating: { type: Sequelize.FLOAT, validate: { min: 0, max: 5 }}

})

module.exports = Reviews
