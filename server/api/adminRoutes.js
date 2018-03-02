const router = require('express').Router()
const { Products } = require('../db/models')
const { User } = require('../db/models');
module.exports = router

router.delete('/:id', (req, res, next) => {
  const deleteId = req.params.id;
  User.findById(req.user.id)
  .then(user =>{
    if (user.isAdmin){
      Products.destroy({ where: { id: deleteId} })
        .then(() => res.sendStatus(204))
        .catch(next)
    }
    else {
      res.sendStatus(401);
    }
  })
})

// TODO created a delete products route to use for admins
