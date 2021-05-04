const express = require('express');
const router = express.Router();
const { appointment } = require('../controller');


/* GET home page. */
router.get('/', function(req, res, next) {

  appointment.getSlots('725', '05-04-2021').then((centers) => {
    res.render(centers.length ? 'index' : 'noslot', { centers });
  }).catch((err) => {
    res.render('error', err);
  });
});

router.get('/siliguri', function(req, res, next) {

  appointment.getSlots('715', '05-04-2021').then((centers) => {
    res.render(centers.length ? 'index' : 'noslot', { centers });
  }).catch((err) => {
    res.render('error', err);
  });
});

module.exports = router;
