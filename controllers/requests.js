
var data = require('../models/db');

module.exports.show = function(req,res){
	res.render('show');
};


// API JSON data 
module.exports.get = function (req, res) {
res.status(200);
data.find({ }, function (err, docs) {
    if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(docs);
}); 

};


module.exports.post = function (req,res){

    // add request
    data.create({
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        date: req.body.date
    }, function(err,inventory){
       if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(inventory);
    });
};

//find by ID request
module.exports.findbyid = function(req,res){
    
        data.findById(req.params.id, function(err, inventory){ 
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(inventory);
     

    } ) //findbyid ends here
};


//delete by ID request
module.exports.delete = function(req,res){

    data.findByIdAndRemove(req.params.id, function(err,inventory){
      if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ inventory.product +" was deleted.");

    })   

};


//update by ID request
module.exports.put = function(req,res){

       data.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, inventory) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(inventory);
    });

    
}






