/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('korisnik', {
    idKorisnik: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id_korisnik'
    },
    adresa: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'adresa'
    },
    ciklus: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'ciklus'
    },
    datumRodjenja: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'datum_rodjenja'
    },
    drzavljanstvo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'drzavljanstvo'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'email'
    },
    fotografija: {
      type: "LONGBLOB",
      allowNull: true,
      field: 'fotografija'
    },
    ime: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'ime'
    },
    imePrezimeMajke: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'ime_prezime_majke'
    },
    imePrezimeOca: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'ime_prezime_oca'
    },
    indeks: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'indeks'
    },
    jmbg: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'jmbg'
    },
    kanton: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'kanton'
    },
    linkedin: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'linkedin'
    },
    mjestoRodjenja: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'mjesto_rodjenja'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'password'
    },
    prezime: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'prezime'
    },
    semestar: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'semestar'
    },
    spol: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'spol'
    },
    telefon: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'telefon'
    },
    titula: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'titula'
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'username'
    },
    website: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'website'
    },
    idOdsjek: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'id_odsjek'
    },
    idUloga: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'id_uloga'
    },
    idKorisnik: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'idKorisnik'
    },
    datumRodjenja: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'datumRodjenja'
    },
    imePrezimeMajke: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'imePrezimeMajke'
    },
    imePrezimeOca: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'imePrezimeOca'
    },
    mjestoRodjenja: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'mjestoRodjenja'
    },
    idOdsjek: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'idOdsjek'
    },
    idUloga: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'idUloga'
    }
  }, {
    tableName: 'korisnik'
  });
};
