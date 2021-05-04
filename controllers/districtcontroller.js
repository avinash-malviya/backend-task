var District = require('../models/district');

exports.createDistrict = function(req,res,next){

	var districtOb = new District({
		district_name:req.body.district_name,
	})

	districtOb.save(function(err){
		if(err){
			console.log(err);
			res.json({error:"DistrictName not saved"});
		}
		else{
			console.log("success");
			res.json({msg:"DistrictName saved successfully"})
		}
	})
}

	exports.getDistrict = function(req,res,next){
		District.find()
		.exec(function(err,district_list){
			res.json(district_list)
		})
}
