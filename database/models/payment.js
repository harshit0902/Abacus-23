const Joi = require('joi');

const paymentSchemas = {
    User: Joi.object().keys({
        razorpay_order_id: Joi.string().required(),
        razorpay_payment_id: Joi.string().email().lowercase().required(),
        razorpay_signature: Joi.string().min(8).required(),
     })
    };

module.exports = paymentSchemas;