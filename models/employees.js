"use strict";

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    EmployeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Title: DataTypes.STRING,
    ReportsTo: DataTypes.INTEGER,
    BirthDate: DataTypes.STRING,
    HireDate: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    tableName: 'Employee',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};
