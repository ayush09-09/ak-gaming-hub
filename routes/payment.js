const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');
paypal.configure({
  mode: 'sandbox',
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET'
});
router.post('/pay', async (req, res) => {
  const payment = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    transactions: [{
      amount: {
        currency: 'USD',
        total: req.body.amount
      }
    }]
  };
  paypal.payment.create(payment, async (error, payment) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(payment);
    }
  });
});
// Test route for checking payment route
router.get('/test', (req, res) => {
  res.json({ message: 'Payment route working!' });
});
module.exports = router;
