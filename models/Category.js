/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    categoryType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'CategoryType'
    },
    keyName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'KeyName'
    },
    displayName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
      field: 'DisplayName'
    }
  }, {
    tableName: 'Category'
  });
};
