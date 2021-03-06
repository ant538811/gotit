var connection = require("./connection.js");

var orm = {
	//create a new user in the user table and send back the generated user_id
	addUser : function (userData, cbFunc){
		let sql = "INSERT INTO users (name, phone, username ,email, gender, age, password)" +
					"VALUES (?, ?, ?, ?, ?, ?, ?)"
		connection.query(sql, [userData.name, userData.phone, userData.username, userData.email, userData.gender,
			userData.age, userData.password], (error, results, fields)=>{
				if (error){
					console.log(error);
					throw error;
				}
		});
	},
	//check if the password is correct
	validPassword : function(password, curUser) {
		if(curUser){
			return (password === curUser[0].password);			
		}
		throw error;
	},
	// assigns a user a position to a team given a user's id and a team's id
	addPosition : function(positionData, cbFunc){
		let sql = "INSERT INTO positions (role, fk_user_id, fk_team_id, time)" + "VALUES (?, ?, ?, ?)"
		connection.query(sql, [positionData.role, positionData.fk_user_id, positionData.fk_team_id, Date.now()], (error, results, fields)=>{
			if (error){
				console.log(error);
				throw error;
			}
		});	
	},
	// creates a team given the team name
	addTeam : function (teamData, cbFunc){
		let sql = "INSERT INTO teams (team_name)" +
					"VALUES (?)"
		connection.query(sql, teamData.team_name, (error, results, fields)=>{
				if (error){
					console.log(error);
					throw error;
				}
		});
	},
	//get user information for the given username and send it to callback func. 
	getUser : function(username, cbFunc){
		let sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
		connection.query(sql, username, (err, res)=>{
			cbFunc(res);
		})
	},
	//removes the user from a team given the position id
	dropPosition : function (positionId){
		let sql = "DELETE FROM positions WHERE position_id = ?";
		connection.query(sql, position_id, (error, results, fields)=>{
			if (error){
				console.log(error);
				throw error;
			}
		});		
	}
}

module.exports = orm;