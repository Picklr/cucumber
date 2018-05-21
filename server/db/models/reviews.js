const Sequelize = require('sequelize')
const db = require('../db.js')

const Reviews = db.define('reviews', {
  body: {
    type: Sequelize.STRING,
    allowNull: false },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: 1, max: 5 } }

})

module.exports = Reviews
