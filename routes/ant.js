var express = require('express');
const ant_controlers= require('../controllers/ant');
var router = express.Router();
/* GET costumes */
router.get('/', ant_controlers.ant_view_all_Page );
module.exports = router;

// GET detail ant page */
router.get('/detail', ant_controlers.ant_view_one_Page);