module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Authors", {
    name: DataTypes.STRING
  });

  return Author;
};
