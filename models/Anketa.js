/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anketa', {
    idAnketa: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      field: 'idAnketa'
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Predmet',
        key: 'id'
      },
      field: 'idPredmet'
    },
    idNapravio: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      },
      field: 'idNapravio'
    },
    napravioIme: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'napravioIme'
    },
    datumKreiranja: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'datumKreiranja'
    },
    tipAnkete: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tipAnkete'
    },
    naziv: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'naziv'
    },
    opisAnkete: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'opisAnkete'
    },
    datumIstekaAnkete: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'datumIstekaAnkete'
    }
  }, {
    tableName: 'Anketa'
  });
};
