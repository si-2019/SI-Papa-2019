/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('akademskaGodina', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    naziv: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'naziv'
    },
    aktuelna: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'aktuelna'
    }
  }, {
    tableName: 'AkademskaGodina'
  });
};
