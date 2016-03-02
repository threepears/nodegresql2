"use strict";

module.exports = function(sequelize, DataTypes) {
  var PlaylistTrack = sequelize.define('PlaylistTrack', {
    PlaylistId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    TrackId: DataTypes.INTEGER
  }, {
    tableName: 'PlaylistTrack',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // PlaylistTrack.belongsTo(models.Track, {
        //   foreignKey: 'TrackId'
        // });
        // associations can be defined here
      }
    }
  });
  return PlaylistTrack;
};
