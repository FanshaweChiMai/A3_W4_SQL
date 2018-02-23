var express = require('express');
var router = express.Router();
var config = require('../config');

//do some checking here to check the default user profile
// ternary statement => MDN ternary
var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, {
    title: 'Done yet?',
    message : "handlebars is awesome",
    mainpage : true,
    kidsmode : config.kidsmode
  });
});

module.exports = router;
