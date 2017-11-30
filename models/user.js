var orm = require('../config/orm.js');

var user = {
	addUser : function(userData, cbFunc){
		orm.insertUser(userData, (res)=>{
			cbFunc(res);
		});
	},
}

//package this as a bridge between the orm and controller
module.exports = user;