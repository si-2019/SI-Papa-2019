/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilegija', {
    idPrivilegija: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'idPrivilegija'
    },
    privilegija: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'privilegija'
    }
  }, {
    tableName: 'privilegija'
  });
};
};
