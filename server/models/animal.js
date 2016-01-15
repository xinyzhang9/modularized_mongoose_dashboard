var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
	name:String,
	lives:String,
	legs:String,
	updated_at:Date

})
var Animal = mongoose.model('Animal',AnimalSchema);