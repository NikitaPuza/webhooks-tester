var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:hook', (req, res, next) => {
	const webhooks = []
	let body = JSON.stringify(req.body);
	webhooks.push(body);
	console.log('got ' + req.body + ' at ' + req.params.hook);
	res.sendStatus(200)
  next()
});
router.get('/:hook', function(req, res) {
  res.render('index', {data: webhooks} );
});

module.exports = router;
