/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issueCategory', {
    idCategory: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      },
      field: 'idCategory'
    },
    idIssue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Issue',
        key: 'idissue'
      },
      field: 'idIssue'
    }
  }, {
    tableName: 'issue_category'
  });
};
