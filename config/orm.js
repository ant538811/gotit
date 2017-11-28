var connection = require("./connection.js");

var orm = {
	//create a new user in the user table and send back the generated user_id
	insertUser : function (userData, cbFunc){
		let sql = "INSERT INTO users (name, phone, email, gender, age, password)" +
					"VALUES (?, ?, ?, ?, ?, ?)"
		connection.query(sql, [userData.name, userData.phone, userData.email, userData.gender,
			userData.age, userData.password], (error, results, fields)=>{
				if (error){
					console.log(error);
					throw error;
				}
				cbFunc(results.insertId);
		});
	},
	//check if the password is correct
	validPassword : function(password, curUser) {
		if(curUser){
			return (password === curUser[0].password);			
		}
		throw error;
	},
	//get user information for the given username and send it to callback func. 
	getUser : function(username, cbFunc){
		let sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
		connection.query(sql, username, (err, res)=>{
			cbFunc(res);
		})
	},
}