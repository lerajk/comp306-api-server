var express = require('express');
var router = express.Router();

//controller variable
var inventory = require('../controllers/requests'); 
//model for creating blogs
require('../models/db');


/*********************/

//API Method calls for Server 

//GET request for  API JSON data 
router.get('/api', inventory.get);

//POST request to add info
router.post('/api', inventory.post);

//DELETE request for ONE ITEM by ID
router.delete('/api/:id', inventory.delete);

//PUT request for ONE ITEM by ID 
router.put('/api/:id', inventory.put);


//GET request for ONE ITEM by ID
router.get('/api/:id', inventory.findbyid);



// GET request to root - localhost:3000
router.get('/', function(req, res){
	res.send('Welcome to the API')
  //res.render('index');
});

/*********************/


/******


//GET routing to display all the information
router.get('/show', inventory.show);


//GET routing to the add page
router.get('/add', function(req,res){
  res.render('add');
});


//GET request for the edit page 
router.get('/add/:id', function(req,res){
  res.render('edit');
  
});

******/


module.exports = router;
