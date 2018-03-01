const router = require('express').Router()
const {Order, HistoricalItems} = require('../db/models')
module.exports = router

router.post('/',(req,res,next)=>{

    const orderInstance = Order.create({status:'TEST', userId: req.body.userId}).then(freshOrder=>{
        //freshOrder.setUser(req.user)})
        console.log('Congrats on your order!')
    })

    const historicalPurchases = HistoricalItems.bulkCreate(req.body.shoppingList)
})



// Products.bulkCreate(ourSeed)
// .catch(console.error.bind(console))
// .finally(_ => {
//   db.close()
//   console.log('Closed connection.')
//   return null
// })