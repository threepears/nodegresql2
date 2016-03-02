"use strict";

module.exports = function(sequelize, DataTypes) {
  var InvoiceLine = sequelize.define('InvoiceLine', {
    InvoiceLineId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    InvoiceId: DataTypes.INTEGER,
    TrackId: DataTypes.INTEGER,
    UnitPrice: DataTypes.DECIMAL(2, 10),
    Quantity: DataTypes.INTEGER
  }, {
    tableName: 'InvoiceLine',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        InvoiceLine.belongsTo(models.Invoice, {
          foreignKey: 'InvoiceId'
        });
        // associations can be defined here
      }
    }
  });
  return InvoiceLine;
};
