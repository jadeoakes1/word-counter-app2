var express = require('express');
var router = express.Router();
const port = 8080;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Word Counter' });
});

application.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = router;