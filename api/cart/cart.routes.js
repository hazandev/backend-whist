const express = require('express')
const router = express.Router()
const {payProducts, getCarts} = require('./cart.controller')

router.get('/carts', getCarts)
router.post('/pay', payProducts)



module.exports = router;
