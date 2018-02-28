const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll()
    .then(products => res.json(products))
    .catch(next)
})
