const Sequelize = require('sequelize')
const db = require('../db')

const HistoricalItems = db.define('historicalItems', {
    name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    brand: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    price: { type: Sequelize.DECIMAL },
    photo: { type: Sequelize.STRING },
    totalSales: { type: Sequelize.INTEGER },
    category: { type: Sequelize.STRING },
    stars: { type: Sequelize.FLOAT, validate: { min: 0, max: 5 }},
    tags: { type: Sequelize.ARRAY(Sequelize.STRING) },
    quantity: {type: Sequelize.INTEGER}
})

HistoricalItems.belongsTo(Order)

module.exports = HistoricalItems
