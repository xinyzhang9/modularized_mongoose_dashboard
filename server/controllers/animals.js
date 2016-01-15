var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
	show_all:function(req,res){
		Animal.find({},function(err,animals){
			if(err){
				res.render('error',{errors:err});
			}else{
				res.render('index',{animals:animals});
			}
		})
	},

	create:function(req,res){
		var animal = new Animal({
			name:req.body.name,
			lives:req.body.lives,
			legs:req.body.legs,
			updated_at:Date()
		})
		animal.save(function(err){
			if(err){
				console.log('something wrong');
			}else{
				console.log('successfully added a new animal');
				res.redirect('/');
			}
		})
	},

	update:function(req,res){
		Animal.update(
			{_id:req.params.id},{
				name:req.body.name,
				lives:req.body.lives,
				legs:req.body.legs,
				updated_at:Date()
			},function(err,animal){
				res.redirect('/');
			}
		);
	},

	remove:function(req,res){
		Animal.remove({_id:req.params.id},function(err,animal){
			if(err){
				res.render('error',{errors:err});
			}else{
				res.redirect('/');
			}
		})
	},

	show_one:function(req,res){
		Animal.findOne({_id:req.params.id},function(err,animal){
			res.render('animal',{animal:animal});
		})
	},

	go_to_edit_page:function(req,res){
		Animal.findOne({_id:req.params.id},function(err,animal){
			console.log("Edit an animal");
			res.render("profile",{animal:animal});
		})
	},

}