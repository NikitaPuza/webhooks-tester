var express = require('express');
var router = express.Router();

var webhooks = ''
/* GET users listing. */
router.post('/', function(req, res, next) {
	webhooks = req.body
	console.log(webhooks)
	res.sendStatus(200)
  next()
});
router.get('/', function(req, res) {
  res.send(webhooks);
});

module.exports = router;
