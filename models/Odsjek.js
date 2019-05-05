/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odsjek', {
    idOdsjek: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'idOdsjek'
    },
    naziv: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: 'naziv'
    }
  }, {
    tableName: 'odsjek'
  });
};

};
