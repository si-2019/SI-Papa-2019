const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const moment = require("moment");
const swaggerDoc = require('./swaggerDoc.js');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('./db.js')

var PORT = process.env.PORT || 31916;
swaggerDoc(app);

db.sequelize.sync()
    .then(() => console.log("Uspjesno povezano sa bazom!"))
    .catch((err) => console.log("Nije uspjesno povezano sa bazom!", err));


app.get('/',(req, res)=>{
    res.status(200).send();
});

app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Belmin 1
   /**
 * @swagger
 * /papa/trenutniPredmeti:
 *    get:
 *      description: Vraća trenutni predmet 
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracen predmet
 *                  400:
 *                      description: Došlo je do greške
 */

app.get("/papa/trenutniPredmeti", function (req, res) {
  var id_Studenta = req.query.idStudent;
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

//Ilma 1
  /**
 * @swagger
 * /papa/odslusaniPredmeti:
 *    get:
 *      description: Vraća odslusane predmete 
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vraceni predmeti
 *                  400:
 *                      description: Došlo je do greške
 */

app.get("/papa/odslusaniPredmeti", function (req, res) {
  var id_Studenta = req.query.idStudent;
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '0'}}}).then(godina => {
      db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
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

// Kenan 1
  /**
 * @swagger
 * /papa/trenutniProfesori:
 *    get:
 *      description: Vraća trenutne profesore
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vraceni profesori
 *                  400:
 *                      description: Došlo je do greške
 */

app.get("/papa/trenutniProfesori", function (req, res) {
  var id_Studenta = req.query.idStudent;
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
          niz=[];
          for(var i = 0; i<veze.length; i++){
              niz.push(veze[i].idPredmet);
          }
          db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
              niz2=[];
              for(var i = 0; i<predmeti.length; i++){
                  niz2.push(predmeti[i].idProfesor);
              }
              db.Korisnik.findAll({where: {id:niz2}}).then(profesori=>{
                  res.send(profesori);
              }).catch(function(err){
                  console.log({val:err});
              });
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


// Merima 1
 /**
 * @swagger
 * /papa/trenutniAsistenti:
 *    get:
 *      description: Vraća trenutne asistente
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vraceni asistenti
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/trenutniAsistenti", function (req, res) {
  var id_Studenta = req.query.idStudent;
  console.log(req.query.idStudent);
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
          niz=[];
          for(var i = 0; i<veze.length; i++){
              niz.push(veze[i].idPredmet);
          }
          db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
              niz2=[];
              for(var i = 0; i<predmeti.length; i++){
                  niz2.push(predmeti[i].idAsistent);
              }
              db.Korisnik.findAll({where: {id:niz2}}).then(asistenti=>{
                  res.send(asistenti);
              }).catch(function(err){
                  console.log({val:err});
              });
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

// Azra 1
 /**
 * @swagger
 * /papa/polozeniPredmeti:
 *    get:
 *      description: Vraća polozene predmete
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                      type: string
 *                   idPredmet:
 *                      type: string
 *               responses:
 *                  200:
 *                      description: Vraceni polozeni predmeti
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/polozeniPredmeti", function (req, res) {
  var id_Studenta = req.query.idStudent;
 
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

// Selma 1
 /**
 * @swagger
 * /papa/nePolozeniPredmeti:
 *    get:
 *      description: Vraća nepolozene predmete
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                      type: string
 *                   idPredmet:
 *                      type: string
 *               responses:
 *                  200:
 *                      description: Vraceni nepolozeni predmeti
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/nePolozeniPredmeti", function (req, res) {
  var id_Studenta = req.query.idStudent;
 
  db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, ocjena:{[Op.eq]:null}}}).then(veze =>{
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

// Ferhad 1
/**
 * @swagger
 * /papa/trenutniSaDrugihOdsjeka:
 *    get:
 *      description: Vraća trenutne predmete sa drugih odsjeka
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                      type: string
 *                   idPredmet:
 *                      type: string
 *               responses:
 *                  200:
 *                      description: Vraceni trenutne predmete sa drugih odsjeka
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/trenutniSaDrugihOdsjeka", function (req, res) {
  var id_Studenta = req.query.idStudent;
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.Korisnik.findOne({where : {id:id_Studenta}}).then(student => {
          db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
              niz=[];
              for(var i = 0; i<veze.length; i++){
                  niz.push(veze[i].idPredmet);
              }
              db.odsjek_predmet.findAll({attributes :['idPredmet'],where:{idOdsjek:{[Op.ne]:student.idOdsjek}, idPredmet:niz}}).then(predmetiNaDrugimOdsjecima =>{
                  niz2=[];
                  for(var i = 0; i<predmetiNaDrugimOdsjecima.length; i++){
                      niz2.push(predmetiNaDrugimOdsjecima[i].idPredmet);
                  }
                  db.Predmet.findAll({where: {id:niz2}}).then(predmeti=>{
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

      }).catch(function(err){
          console.log({val:err});
      });
  }).catch(function(err){
      console.log({val:err});
  });
});


//Sakib 1
/**
 * @swagger
 * /papa/trenutniSaDrugihSemestara:
 *    get:
 *      description: Vraća trenutne predmete sa drugih semestara
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                      type: string
*                   idPredmet:
 *                      type: string
 *               responses:
 *                  200:
 *                      description: Vraceni trenutne predmete sa drugih semestara
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/trenutniSaDrugihSemestara", function (req, res) {
  var id_Studenta = req.query.idStudent;

  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.Korisnik.findOne({where : {id:id_Studenta}}).then(student => {
          db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
              niz=[];
              for(var i = 0; i<veze.length; i++){
                  niz.push(veze[i].idPredmet);
              }
              var a=0;
              if(student.ciklus==1){
                  if(student.semestar==1 || student.semestar == 2){ a=1; }
                  if(student.semestar==3 || student.semestar == 4){ a=2; }
                  else{ a=3; }

              }else{
                  if(student.semestar==1 || student.semestar == 2){ a=4; }
                  if(student.semestar==3 || student.semestar == 4){ a=5; }
              }
              db.odsjek_predmet.findAll({attributes :['idPredmet'],where:{godina:{[Op.ne]:a}, idPredmet:niz}}).then(predmetiNaDrugimOdsjecima =>{
                  niz2=[];
                  for(var i = 0; i<predmetiNaDrugimOdsjecima.length; i++){
                      niz2.push(predmetiNaDrugimOdsjecima[i].idPredmet);
                  }
                  db.Predmet.findAll({where: {id:niz2}}).then(predmeti=>{
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

      }).catch(function(err){
          console.log({val:err});
      });
  }).catch(function(err){
      console.log({val:err});
  });
});

// Ferhad 2
/**
 * @swagger
 * /papa/obavjestenjaAdmin:
 *    get:
 *      description: Vraća obavjestenja administratora
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idUloga:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracena obavjestenja
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/obavjestenjaAdmin", function (req, res) {

  db.Korisnik.findAll({attributes :['id'],where:{idUloga:4}}).then(admin => {
      niz=[];
      for(var i = 0; i<admin.length; i++){
          niz.push(admin[i].id);
      }
      db.ObavjestenjeGlobalno.findAll({where:{idKorisnik:niz}}).then(obavijest=>{
          res.send(obavijest);
      }).catch(function(err){
          console.log({val:err});
      });
  }).catch(function(err){
      console.log({val:err});
  });
});


//Belmin 2
/**
 * @swagger
 * /papa/obavjestenjaStudentskaSluzba:
 *    get:
 *      description: Vraća obavjestenja studentske sluzbe
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idUloga:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracena obavjestenja sluzbe
 *                  400:
 *                      description: Došlo je do greške
 */
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
  }).catch(function(err){
      console.log({val:err});
  });
});

//Azra 2
/**
 * @swagger
 * /papa/obavjestenjaProfesor:
 *    get:
 *      description: Vraća obavjestenja profesora
 *    parameters:
 *             - name: params
 *               in: req.params
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracena obavjestenja profesora
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/obavjestenjaProfesor", function (req, res) {
  var id_Studenta = req.query.idStudent;

  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.Korisnik.findAll({attributes :['id'],where:{idUloga:3}}).then(profesor => {
          niz=[];
          for(var i = 0; i<profesor.length; i++){
              niz.push(profesor[i].id);
          }
          db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
              niz2=[];
              for(var i = 0; i<veze.length; i++){
                  niz2.push(veze[i].idPredmet);
              }
              db.ObavjestenjePredmet.findAll({where:{idKorisnik:niz, idPredmet:niz2}}).then(obavijest=>{
                  res.send(obavijest);
              }).catch(function(err){
                  console.log({val:err});
              });
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

// Merima 2
/**
 * @swagger
 * /papa/obavjestenjaAsistent:
 *    get:
 *      description: Vraća obavjestenja asistenata
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracena obavjestenja asistenata
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/obavjestenjaAsistent", function (req, res) {
  var id_Studenta = req.query.idStudent;

  
  db.AkademskaGodina.findOne({where:{aktuelna:{[Op.like]: '1'}}}).then(godina => {
      db.Korisnik.findAll({attributes :['id'],where:{idUloga:2}}).then(profesor => {
          niz=[];
          for(var i = 0; i<profesor.length; i++){
              niz.push(profesor[i].id);
          }
          db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta, idAkademskaGodina: godina.id}}).then(veze =>{
              niz2=[];
              for(var i = 0; i<veze.length; i++){
                  niz2.push(veze[i].idPredmet);
              }
              db.ObavjestenjePredmet.findAll({where:{idKorisnik:niz, idPredmet:niz2}}).then(obavijest=>{
                  res.send(obavijest);
              }).catch(function(err){
                  console.log({val:err});
              });
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


//Selma 2
/**
 * @swagger
 * /papa/upisaneOcijene:
 *    get:
 *      description: Vraća upisane ocjene
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vracena upisane ocjene
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/upisaneOcijene", function (req, res) {
  var id_Studenta = req.query.idStudent;
 
  db.predmet_student.findAll({attributes :['idPredmet', 'ocjena'], where: {idStudent: id_Studenta, ocjena:{[Op.ne]:null}}}).then(veze =>{
      niz=[];
      for(var i = 0; i<veze.length; i++){
          niz.push(veze[i].idPredmet);
      }
      db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
          var obj =[]
          for(var i = 0; i<predmeti.length; i++){
              for(var j = 0; i<veze.length; j++){
                  if(predmeti[i].id == veze[j].idPredmet){
                      var pred = {
                          naziv:predmeti[i].naziv,
                          ocjena:veze[j].ocjena
                      };
                      obj.push(pred);
                      break;
                  }
              }
          }
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(obj));
      }).catch(function(err){
          console.log({val:err});
      });
  }).catch(function(err){
    console.log({val:err});
    });
 
});

// Ilma 2
/**
 * @swagger
 * /papa/rezultatiIspita:
 *    get:
 *      description: Vraća rezultate ispita
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vraceni rezultati ispita
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/rezultatiIspita", function (req, res) {
    var id_Studenta = req.query.idStudent;

    db.ispiti_rezultati.findAll({attributes :['idIspit', 'bodovi'], where: {idStudent: id_Studenta}}).then(rezultati =>{
        niz=[];
        for(var i = 0; i<rezultati.length; i++){
            niz.push(rezultati[i].idIspit);
        }
        db.Ispit.findAll({where:{idIspit:niz}}).then(ispiti => {
            niz2=[];
            for(var i = 0; i<ispiti.length; i++){
                niz2.push(ispiti[i].idPredmet);
            }
            db.Predmet.findAll({where: {id:niz2}}).then(predmeti=>{
                var obj =[]
                for(var i = 0; i<rezultati.length; i++){
                    for(var j = 0; i<ispiti.length; j++){
                        if(rezultati[i].idIspit == ispiti[j].idIspit){
                            for(var k=0; k<predmeti.length; k++){
                                if(ispiti[j].idPredmet == predmeti[k].id){
                                    var pred = {
                                        predmet:predmeti[k].naziv,
                                        vrsta:ispiti[j].tipIspita,
                                        datum:ispiti[j].termin,
                                        brojBodova:rezultati[i].bodovi
                                    };
                                    obj.push(pred);
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(obj));
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


//Sakib 2
/**
 * @swagger
 * /papa/rezultatiIspita:
 *    get:
 *      description: Vraća rezultate ispita
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idStudent:
 *                   type: string
 *               responses:
 *                  200:
 *                      description: Vraceni rezultati ispita
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/ispitiPrijava", function (req, res) {
    var id_Studenta = req.query.idStudent;
   
    db.predmet_student.findAll({attributes :['idPredmet'], where: {idStudent: id_Studenta}}).then(veze =>{
        niz=[];
        for(var i = 0; i<veze.length; i++){
            niz.push(veze[i].idPredmet);
        }
        db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
            db.Ispit.findAll({where: {idPredmet:niz, rokPrijave:{ [Op.gte] : moment().toDate() }}}).then(ispiti=>{
                var obj=[];
                for(var i = 0; i<ispiti.length; i++){
                    for(var j = 0; i<predmeti.length; j++){
                        if(ispiti[i].idPredmet == predmeti[j].id){
                            var pred = {
                                predmet:predmeti[j].naziv,
                                vrsta:ispiti[i].tipIspita,
                                datum:ispiti[i].termin
                            };
                            obj.push(pred);
                            break;
                        }
                    }
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(obj));
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

/**
 * @swagger
 * /papa/sviIspiti:
 *    get:
 *      description: Vraća sve ispite
 *    parameters:
 *             - name: body
 *               schema:
 *               type: object
 *               properties:
 *                   idOdsjek:
 *                      type: string
 *                   idPredmet:
 *                      type: string
 *                   godina:
 *                      type: string
 *               responses:
 *                  200:
 *                      description: Vraceni rezultati ispita
 *                  400:
 *                      description: Došlo je do greške
 */
app.get("/papa/sviIspiti", function (req, res) {
 
  db.Ispit.findAll({where: {rokPrijave:{ [Op.gte] : moment().toDate() }}}).then(ispiti =>{
      niz=[];
      for(var i = 0; i<ispiti.length; i++){
          niz.push(ispiti[i].idPredmet);
      }
      db.Predmet.findAll({where: {id:niz}}).then(predmeti=>{
          niz2=[];
          for(var i = 0; i<predmeti.length; i++){
              niz2.push(predmeti[i].id);
          }
          db.odsjek_predmet.findAll({attributes :['idOdsjek', 'idPredmet', 'godina'],where: {idPredmet:niz2}}).then(odsijek_pred=>{
              niz3=[];
              for(var i = 0; i<odsijek_pred.length; i++){
                  niz3.push(odsijek_pred[i].idOdsjek);
              }
              db.Odsjek.findAll({where: {idOdsjek:niz3}}).then(odsjek=>{
                  var obj =[]
                  for(var i = 0; i<ispiti.length; i++){
                      for(var j = 0; i<predmeti.length; j++){
                          if(ispiti[i].idPredmet == predmeti[j].id){
                              for(var k=0; k<odsijek_pred.length; k++){
                                  if(predmeti[j].id == odsijek_pred[k].idPredmet){
                                      for(var s=0; s<odsjek.length; s++){
                                          if(odsijek_pred[k].idOdsjek == odsjek[s].idOdsjek){
                                            var pred = {
                                              predmet:predmeti[j].naziv,
                                              vrsta:ispiti[i].tipIspita,
                                              datum:ispiti[i].termin,
                                              sala:ispiti[i].sala,
                                              godina:odsijek_pred[k].godina,
                                              odsjek:odsjek[s].naziv
                                            };
                                            obj.push(pred);
                                            break;
                                          }
                                      }
                                      break;
                                  }
                              }
                              break;
                          }
                      }
                  }
                  res.setHeader('Content-Type', 'application/json');
                  res.send(JSON.stringify(obj));
              }).catch(function(err){
                console.log({val:err});
              });  
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

/**
 * @swagger
 * /papa/neradniDani:
 *    get:
 *      description: Vraća sve predmete                  
 *      responses:
 *             200:
 *               description: Vraca neradne dane
 *             400:
 *               description: Došlo je do greške
 */
app.get("/papa/neradniDani", function (req, res){
  db.sequelize.query("SELECT * FROM `NeradniDani`", { type: sequelize.QueryTypes.SELECT}).then(dani => {
    res.send(dani);
  }).catch(function(err){
      console.log({val:err});
  });
});
/**
 * @swagger
 * /papa/godine:
 *    get:
 *      description: Vraća sve predmete                  
 *      responses:
 *             200:
 *               description: Vraca godine
 *             400:
 *               description: Došlo je do greške
 */
app.get("/papa/godine", function (req, res) {
    db.AkademskaGodina.findAll().then(godina => {
       res.send(godina);
    }).catch(function(err){
        console.log({val:err});
    });
}); 
/**
 * @swagger
 * /papa/sviPredmeti:
 *    get:
 *      description: Vraća sve predmete                  
 *      responses:
 *             200:
 *               description: Vraceni svi predmeti
 *             400:
 *               description: Došlo je do greške
 */
app.get("/papa/sviPredmeti", function (req, res) {
    db.Predmet.findAll().then(predmet => {
       res.send(predmet);
    }).catch(function(err){
        console.log({val:err});
    });
}); 

app.listen(PORT,function(){
    console.log('server successfully started on port '+PORT);
});