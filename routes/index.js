var express = require('express');
var router = express.Router();

var webhooks = ''
/* GET users listing. */
router.post('/:hook', function(req, res, next) {
	webhooks = JSON.stringify(req.body)
	console.log(req.params.hook);
	res.sendStatus(200)
  next()
});
router.get('/:hook', function(req, res) {
  res.render('index', {data: webhooks} );
});

module.exports = router;
