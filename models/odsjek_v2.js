/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odsjekV2', {
    idOdsjek: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id_odsjek'
    },
    naziv: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: 'naziv'
    }
  }, {
    tableName: 'odsjek_v2'
  });
};
