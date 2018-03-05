const Sequelize = require('sequelize')
const db = require('../db')


const Order = db.define('order', {
  status: { type: Sequelize.STRING, defaultValue: 'Shipping'},
  totalPrice: {type: Sequelize.DECIMAL}
})

const HistoricalItems = db.define('historicalItems', {
  foodProductId: { type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
  brand: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
  price: { type: Sequelize.DECIMAL },
  photo: { type: Sequelize.STRING },
  totalSales: { type: Sequelize.INTEGER },
  category: { type: Sequelize.STRING },
  stars: { type: Sequelize.FLOAT, validate: { min: 0, max: 5 }},
  tags: { type: Sequelize.ARRAY(Sequelize.STRING) },
},{
  scopes: { loadHistory: ()=> ({ include:[{all: true}]
  })
  }
})


module.exports = {Order, HistoricalItems}
