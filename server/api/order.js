const router = require('express').Router()
const {Order, HistoricalItems} = require('../db/models')
module.exports = router

router.post('/',(req,res,next)=>{

    Order.create({userId: req.body.userId}).then(order=>{
        
        const withId = req.body.shoppingList.map(eachProduct=>Object.assign({},eachProduct, {orderId: order.id}))
        console.log('Does it have Id?', withId)
        HistoricalItems.bulkCreate(withId).then(arrayOfProducts=>{
        console.log('These were in the cart ', arrayOfProducts)
        arrayOfProducts.forEach(eachProduct=>{
                eachProduct.setOrder(order)
        })
    })
   })

})



// Products.bulkCreate(ourSeed)
// .catch(console.error.bind(console))
// .finally(_ => {
//   db.close()
//   console.log('Closed connection.')
//   return null
// })