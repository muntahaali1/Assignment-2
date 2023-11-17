var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let muntahasinventoryModel = require('../models/muntahasinventory');
let muntahasinventory = require('../controller/muntahasinventory')
/* Get route for the muntahas inventory list */
// Read Operation
router.get('/', muntahasinventory.Displaymuntahasinventory);
/* Get route for Add muntahas inventory page --> Create */
router.get('/add', muntahasinventory.Addmuntahasinventory); 
/* Post route for Add muntahasinventory --> Create */
router.post('/add', muntahasinventory.Processmuntahasinventory);
/* Get route for displaying the Edit muntahas inventory --> Update */
router.get('/edit/:id', muntahasinventory.Editmuntahasinventory);
/* Post route for processing the Edit muntahas inventory --> Update */
router.post('/edit/:id', muntahasinventory.ProcessEditmuntahasinventory);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', muntahasinventory.Deletemuntahasinventory);
module.exports = router;
