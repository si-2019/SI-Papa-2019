/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odsjekPredmet', {
    idOdsjek: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Odsjek',
        key: 'idodsjek'
      },
      field: 'idOdsjek'
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
    semestar: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'semestar'
    },
    ciklus: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'ciklus'
    },
    tip: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'tip'
    }
  }, {
    tableName: 'odsjek_predmet'
  });
};
