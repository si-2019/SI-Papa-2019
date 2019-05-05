/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilegijaV2', {
    idPrivilegija: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id_privilegija'
    },
    privilegija: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'privilegija'
    }
  }, {
    tableName: 'privilegija_v2'
  });
};
