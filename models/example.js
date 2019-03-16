module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};

module.exports = function(sequelize, DataTypes) {
  var favBook = sequelize.define("favorite_books", {
    text: DataTypes.STRING
  });
  return favBook;
};

//will need module exports for: favBook to write to DB
//will need models for each: similarBooks, bookDetails, favBook
//only favbook needs to write to db