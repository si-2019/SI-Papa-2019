/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uloga', {
    idUloga: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'idUloga'
    },
    naziv: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'naziv'
    }
  }, {
    tableName: 'uloga'
  });
};

};
