var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { });
});
router.get('/elements', function(req, res, next) {
    res.render('elements', { });
});
router.get('/generic', function(req, res, next) {
    res.render('generic', { });
});

module.exports = router;
