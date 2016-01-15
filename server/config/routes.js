var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
var animals = require('../controllers/animals.js');

module.exports = function(app){
	//display all
	app.get('/',function(req,res){
		animals.show_all(req,res);
	})

	//go to add_new_animall page
	app.get('/animals/new_page',function(req,res){
		res.render('new');
	})

	//add animal
	app.post('/animals/new',function(req,res){
		console.log('POST DATA',req.body);
		animals.create(req,res);
	})

	//update a single animal
	app.post('/animals/:id',function(req,res){
		animals.update(req,res);
	});

	//remove a single animal
	app.get('/animals/:id/destroy',function(req,res){
		animals.remove(req,res);
	})

	//display a single animal
	app.get('/animals/:id',function(req,res){
		animals.show_one(req,res);
	})

	//go to edit page
	app.get('/animals/:id/edit',function(req,res){
		animals.go_to_edit_page(req,res);
	})

}
