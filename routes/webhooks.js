var express = require('express');
var router = express.Router();

var webhooks = ''
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/', function(req, res) {
	webhooks = req.body
	console.log(webhooks);
	res.sendStatus(200);
});

module.exports = router;
