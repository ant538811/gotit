var orm = require('../config/orm.js');

var model = {
	addUser : function(userData, cbFunc){
		orm.addUser(userData, (res)=>{
			cbFunc(res);
		});
	},
	addTeam : function(teamData, cbFunc){
		orm.addUser(teamData, (res)=>{
			cbFunc(res);
		});
	},
	addPosition : function(positionData, cbFunc){
		orm.addUser(positionData, (res)=>{
			cbFunc(res);
		});
	},
	dropPosition : function(positionID){
		orm.deleteRequest(positionID);
	}
}
//package this as a bridge between the orm and controller
module.exports = model;

