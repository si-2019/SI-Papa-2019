/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issue', {
    idIssue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      field: 'idIssue'
    },
    idStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      },
      field: 'idStudent'
    },
    idCategory: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Category',
        key: 'id'
      },
      field: 'idCategory'
    },
    issueStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'issueStatus'
    },
    message: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'message'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'DateCreated'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'DateModified'
    }
  }, {
    tableName: 'Issue'
  });
};
