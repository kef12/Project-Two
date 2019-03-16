module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    text: DataTypes.STRING
  });
  return Author;
};
