const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.delete('/', (req, res, next) => {
  const deleteId = req.body.id;
  Products.destoy({ where: { id: deleteId} })
    .then(() => res.send(deleteId))
    .catch(next)
})
