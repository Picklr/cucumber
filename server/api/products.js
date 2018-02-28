const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll()
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:id', (req,res,next)=>{
  Products.findById(req.params.id)
  .then(aProduct => res.json(aProduct))
})
