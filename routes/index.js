var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/:hook', (req, res, next) => {
	const webhooks = '';
	webhooks = JSON.stringify(req.body);
	res.locals.webhook = webhooks;
	console.log('got ' + req.body + ' at ' + req.params.hook);
	//res.sendStatus(200)
  next()
});
router.get('/:hook', function(req, res) {
	let webhooks = req.locals.webhooks
  res.render('index', {data: webhooks} );
});

module.exports = router;
