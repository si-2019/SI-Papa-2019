const Sequelize = require("sequelize");
const sequelize = new Sequelize("TYQcLL35gV","TYQcLL35gV","BLysSj9ZrP",{ host:"37.59.55.185", dialect:"mysql"});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;



module.exports=db;