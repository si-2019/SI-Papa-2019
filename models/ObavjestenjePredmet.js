/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obavjestenjePredmet', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    idKorisnik: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      },
      field: 'idKorisnik'
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Predmet',
        key: 'id'
      },
      field: 'idPredmet'
    },
    datum: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'datum'
    },
    obavjestenje: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'obavjestenje'
    }
  }, {
    tableName: 'ObavjestenjePredmet',
    autoIncrement: true,
    timestamps: false
  });
};
