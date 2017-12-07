var express 		= require('express'),
	router 			= express.Router(),
	diagnoser 		= require('../models/model'),
	request 		= require("request"),
	passport 		= require("../config/passport"),
	isAuthenticated = require("../config/middleware/isAuthenticated"),
	current_user_id = 1;

router.post('/register', function(req, res) {
	userData = {
		name: req.body.first_name + " " + req.body.first_name,
		username: req.body.username, 
		phone: req.body.phone, 
		email: req.body.email, 
		gender: req.body.gender,
		age: req.body.age, 
		password: req.body.password
	}
	// teamData = {			use this when making the create team route
	// 	team_name: req.body.team_name,
	// }
	model.addUser(userData, (newlyCreatedId)=>{
		current_user_id = newlyCreatedId;
		res.render('login', {loggedIn:false})
	});
});

router.get("/login", function(req, res) {
	// If the user already has an account send them to the members page
	if (req.model) {
	  res.redirect("/member", {loggedIn:true});
	}else{
		res.render("login", {loggedIn:false});
	}
});

module.exports = router;