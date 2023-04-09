const { Router } = require('express');
const controllers = require('../Controllers/payment.controller');
const schemas = require('../models/payment');

const middleware = require('../middleware/');

const router = Router();

router.post("/checkout", controllers.checkout);
router.post("/paymentverification", controllers.paymentVerification);

module.exports = router;