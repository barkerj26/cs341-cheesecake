/*
 * made by Jaden Barker for CS-341
 */

var express = require('express');
var router = express.Router();

const orders = [
  {
    topping: "cherry",
    quantity: 2
  },
  {
    topping: "chocolate",
    quantity: 6
  },
  {
    topping: "plain",
    quantity: 3
  }
];

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json(orders);
});

/* POST orders listing. */
router.post('/', function(req, res, next) {
  res.json(orders);
});

module.exports = router;
