var State = require('../models/state');

exports.createState = function(req,res,next){

	var stateOb = new State({
		state_name:req.body.state_name,
	})

	stateOb.save(function(err){
		if(err){
			console.log(err);
			res.json({error:"StateName not saved"});
		}
		else{
			console.log("success");
			res.json({msg:"StateName saved successfully"})
		}
	})
}

	exports.getState = function(req,res,next){
		State.find()
		.exec(function(err,state_list){
			res.json(state_list)
		})
}
