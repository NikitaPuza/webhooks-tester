var express = require('express');
var router = express.Router();

var webhooks = ''
/* GET users listing. */
router.post('/', function(req, res, next) {
	webhooks = JSON.stringify(req.body)
	console.log(webhooks)
	res.sendStatus(200)
  next()
});
router.get('/', function(req, res) {
  res.render('index', {data: webhooks} );
});

module.exports = router;
