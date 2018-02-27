const Sequelize = require('sequelize')
const db = require('../db.js')
const User = require('./user')

const Products = db.define('products', {
    name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    brand: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    price: { type: Sequelize.DECIMAL },
    photo: { type: Sequelize.STRING },
    totalSales: { type: Sequelize.DECIMAL },
    category: { type: Sequelize.STRING },
    stars: { type: Sequelize.FLOAT, validate: { min: 0, max: 5 }},
    tags: { type: Sequelize.ARRAY(Sequelize.STRING) },

})


module.exports = Products