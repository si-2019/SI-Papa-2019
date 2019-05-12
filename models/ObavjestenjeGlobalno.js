/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obavjestenjeGlobalno', {
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
    tableName: 'ObavjestenjeGlobalno',
    autoIncrement: true,
    timestamps: false
  });
};
