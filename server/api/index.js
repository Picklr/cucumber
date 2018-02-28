const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
<<<<<<< HEAD
router.use('/shoppingList', require('./shoppingList'))
router.use('/products', require('./products'))
=======
router.use('/admin', require('./adminRoutes'))
router.use('/products',require('./products'))
>>>>>>> master

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

router.get('/', (req, res, next) => {
  res.send('Hi CUCUMBERS')
})
