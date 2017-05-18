var express = require('express');
var router = express.Router();

var webhooks = ''
/* GET users listing. */
router.get('/', function(req, res) {
  console.log(webhooks);
  res.send('respond with a resource');
});
router.post('/', function(req, res) {
	webhooks = req.body
	console.log(webhooks);
	res.sendStatus(200).send(webhooks);
});

module.exports = router;
