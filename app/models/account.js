'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Account.associate = function(models) {
    Account.belongsTo(models.User)
  };
  return Account;
};