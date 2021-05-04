var Login = require('../models/login');

exports.createLogin = function(req,res,next){

	var loginOb = new Login({
		username:req.body.username,
		password:req.body.password
	})

	loginOb.save(function(err){
		if(err){
			console.log(err);
			res.json({error:"Login not saved"});
		}
		else{
			console.log("success");
			res.json({msg:"Login saved successfully"})
		}
	})
}

	exports.getLogin = function(req,res,next){
		Login.find()
		.exec(function(err,login_list){
			res.json(login_list)
		})
}
