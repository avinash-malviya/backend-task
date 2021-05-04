var Child = require('../models/child');

exports.createChild = function(req,res,next){

	var childOb = new Child({

		name : req.body.name,
	sex : req.body.sex,
	date_of_birth : req.body.date_of_birth,
	father_name : req.body.father_name,
	mother_name : req.body.mother_name,
	state : req.body.state,
	district: req.body.district,
	img: req.body.image
	})

	childOb.save(function(err){
		if(err){
			console.log(err);
			res.json({error:"ChildName not saved"});
		}
		else{
			console.log("success");
			res.json({msg:"ChildName saved successfully"})
		}
	})
}

	exports.getChild = function(req,res,next){
		Child.find()
		.exec(function(err,child_list){
			res.json(child_list)
		})
}
