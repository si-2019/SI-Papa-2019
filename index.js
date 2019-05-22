PAPA_Sprint001_071
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('./db.js')

db.sequelize.sync()
    .then(() => console.log("Uspjesno povezano sa bazom!"))
    .catch((err) => console.log("Nije uspjesno povezano sa bazom!", err));



app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Azra
app.get("/papa/polozeniPredmeti", function (req, res) {
  var id_Studenta = req.body.idStudent;
 
  db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, ocjena:{[Op.ne]:null}}}).then(veze =>{
      niz=[];
      for(var i = 0; i<veze.length; i++){
          niz.push(veze[i].idPredmet);
      }
      db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
          res.send(predmeti);
      }).catch(function(err){
          console.log({val:err});
      });
  }).catch(function(err){
      console.log({val:err});
  });

});

app.get("/papa/obavjestenjaStudentskaSluzba", function (req, res) {

  db.Korisnik.findAll({attributes :['id'],where:{idUloga:5}}).then(admin => {
      niz=[];
      for(var i = 0; i<admin.length; i++){
          niz.push(admin[i].id);
      }
      db.ObavjestenjeGlobalno.findAll({where:{idKorisnik:niz}}).then(obavijest=>{
          res.send(obavijest);
      }).catch(function(err){
          console.log({val:err});
      });

app.get("/papa/trenutniPredmeti", function (req, res) {
  var id_Studenta = req.body.idStudent;
 
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.predmet_student.findAll( { attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
          niz=[];
          for(var i = 0; i<veze.length; i++){
              niz.push(veze[i].idPredmet);
          }
          db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
              res.send(predmeti);
          }).catch(function(err){
              console.log({val:err});
          });
      }).catch(function(err){
          console.log({val:err});
  });
    
  }).catch(function(err){
      console.log({val:err});
  });
});



app.listen(31916, () => console.log('Server na portu: 31916'));
develop
