var mongoose = require( 'mongoose' );

var dbURI = process.env.MONGODB_URI ||'mongodb://localhost/inventory';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});


/*****

var uristring = process.env.MONGODB_URI ||'mongodb://localhost/inventory';

var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
}); 

******/

//create schema for mongoose
var InventorySchema = mongoose.Schema({
	product: {
		type: String,
		index:true,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});

var inventory  = mongoose.model('Inventory', InventorySchema);

module.exports = inventory; 


//config variable for heroku
//mongodb://heroku_ml7xp141:46l6st6uao2q4f38oc9atd8cb4@ds163806.mlab.com:63806/heroku_ml7xp141