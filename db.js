const Sequelize = require("sequelize");
const sequelize = new Sequelize("TYQcLL35gV","TYQcLL35gV","BLysSj9ZrP",{ host:"37.59.55.185", dialect:"mysql"});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.Predmet = sequelize.import(__dirname + '/models/Predmet.js');
db.Korisnik = sequelize.import(__dirname + '/models/Korisnik.js');
db.predmet_student = sequelize.import(__dirname + '/models/predmet_student.js');
db.AkademskaGodina = sequelize.import(__dirname + '/models/AkademskaGodina.js');
db.odsjek_predmet = sequelize.import(__dirname + '/models/odsjek_predmet.js');
db.ObavjestenjePredmet = sequelize.import(__dirname + '/models/ObavjestenjePredmet.js');
db.ObavjestenjeGlobalno = sequelize.import(__dirname + '/models/ObavjestenjeGlobalno.js');
db.Ispit = sequelize.import(__dirname + '/models/Ispit.js');
db.ispiti_rezultati = sequelize.import(__dirname + '/models/ispiti_rezultati.js');

module.exports=db;