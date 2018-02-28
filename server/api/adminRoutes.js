const router = require('express').Router()
const { Products } = require('../db/models')
module.exports = router

router.delete('/:id', (req, res, next) => {
  const deleteId = req.params.id;
  Products.destroy({ where: { id: deleteId} })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// TODO created a delete products route to use for admins