const router = require('express').Router()
const {Order, HistoricalItems} = require('../db/models')
module.exports = router

router.post('/',(req,res,next)=>{

    Order.create({userId: req.body.userId}).then(order=>{

        const cloneWithIdMod = req.body.shoppingList.map(eachProduct=>Object.assign({},eachProduct, {id: null, foodProductId: eachProduct.id, orderId: order.id}))

        HistoricalItems.bulkCreate(cloneWithIdMod).then(arrayOfProducts=>{
        arrayOfProducts.forEach(eachProduct=>{
                eachProduct.setOrder(order)
            })
        }).then(arrayOfItems=>{res.json(order)})
   })
})

router.get('/adminHistory',(req,res,next)=>{
    if(req.user.isAdmin){
        Order.findAll({include: [{all: true}]}).then(allHistory=>{res.json(allHistory)})
    }
    else res.sendStatus(401)
})

router.put('/adminHistory',(req,res,next)=>{
    if(req.user.isAdmin){
        Order.findById(req.body.id).then(order=>{
            order.update({status:req.body.status}).then(update=>{res.json(update)})
        })}
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

