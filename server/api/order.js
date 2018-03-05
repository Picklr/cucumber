const router = require('express').Router()
const {Order, HistoricalItems} = require('../db/models')
module.exports = router

router.post('/',(req,res,next)=>{

    Order.create({userId: req.body.userId}).then(order=>{
        
        const cloneWithIdMod = req.body.shoppingList.map(eachProduct=>Object.assign({},eachProduct, {id: null, orderId: order.id}))
    
        HistoricalItems.bulkCreate(cloneWithIdMod).then(arrayOfProducts=>{
        arrayOfProducts.forEach(eachProduct=>{
                eachProduct.setOrder(order)
            })
        }).then(arrayOfItems=>{res.json(order)})
   })
})

router.get('/:userId',(req,res,next)=>{
    Order.findAll({where: {userId: req.params.userId}}).then(oHistory=>{res.json(oHistory)})
})

router.get('/history/:userId',(req, res, next) => {
    Order.findAll({where: {userId: req.params.userId}, include:[{model: HistoricalItems}]})
    .then(
        ordersArr => {
            res.json(ordersArr)
        })
});
