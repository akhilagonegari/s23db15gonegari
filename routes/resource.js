var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ant_controller = require('../controllers/ant');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/ant', ant_controller.ant_create_post);
// DELETE request to delete Costume.
router.delete('/ant/:id', ant_controller.ant_delete);
// PUT request to update Costume.
router.put('/ant/:id', ant_controller.ant_update_put);
// GET request for one Costume.
router.get('/ant/:id', ant_controller.ant_detail);
// GET request for list of all Costume items.
router.get('/ant', ant_controller.ant_list);
module.exports = router