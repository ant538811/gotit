var express 		= require('express'),
	router 			= express.Router(),
	diagnoser 		= require('../models/user'),
	request 		= require("request"),
	passport 		= require("../config/passport"),
	isAuthenticated = require("../config/middleware/isAuthenticated"),
	current_user_id = 1;

router.post('/register', function(req, res) {
	userData = {
		name: req.body.first_name + " " + req.body.first_name, 
		phone: req.body.phone, 
		email: req.body.email, 
		gender: req.body.gender,
		age: req.body.age, 
		password: req.body.password
	}
	user.addUser(userData, (newlyCreatedId)=>{
		current_user_id = newlyCreatedId;
		res.render('login', {loggedIn:false})
	});
});

router.get("/login", function(req, res) {
	// If the user already has an account send them to the members page
	if (req.user) {
	  res.redirect("/member", {loggedIn:true});
	}else{
		res.render("login", {loggedIn:false});
	}
});

module.exports = router;