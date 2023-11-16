var express = require('express');
const ant_controlers= require('../controllers/ant');
var router = express.Router();
/* GET costumes */
router.get('/', ant_controlers.ant_view_all_Page );
// GET request for one costume.
router.get('/ant/:id', ant_controlers.ant_detail);

// GET detail ant page */
router.get('/detail', ant_controlers.ant_view_one_Page);

// GET create costume page */
router.get('/create', ant_controlers.ant_create_Page);

// GET create update page */
router.get('/update', ant_controlers.ant_update_Page);

// GET delete costume page */
router.get('/delete', ant_controlers.ant_delete_Page);



module.exports = router;