var express = require('express');
var router = express.Router();


let webhooks = '';

router.post('/hook', (req, res) => {
	webhooks = JSON.stringify(req.body);
	res.sendStatus(200)
});
router.get('/', function(req, res) {
  res.render('index', {data: webhooks} );
});
router.post('/cart', (req, res) => {
	webhooks = JSON.stringify(req.body);
	res.sendStatus(200)
});
module.exports = router;
