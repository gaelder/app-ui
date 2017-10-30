const express = require('express');
const router = express.Router();

/* GET home page.
All URLS not specified earlier in server/index.js (e.g. REST URLs) get handled by the React UI */
router.get('*', function (req, res, next) {
  res.render('index.html');
});

module.exports = router;
