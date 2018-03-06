const router = require('express').Router()
const {Products, Reviews} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll({
    include:[{all: true}]
  })
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:id', (req,res,next)=>{
  Products.findById(req.params.id)
  .then(aProduct => res.json(aProduct))
})

router.post('/:id/review', (req,res,next) => {
  Reviews.create(req.body)
  .then(review => res.json(review))
})


router.put(`/:id`, (req, res, next) => {
  Products.update(
    req.body,
    {where: {id: req.params.id},
    returning: true,
    plain: true}
  )
    .then(users => res.json(users))
    .catch(next)
})
