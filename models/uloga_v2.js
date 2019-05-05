/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ulogaV2', {
    idUloga: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id_uloga'
    },
    naziv: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'naziv'
    }
  }, {
    tableName: 'uloga_v2'
  });
};
