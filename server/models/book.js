module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
      title: {
	  type: DataTypes.STRING,
	  allowNull: false
      },
      description: {
	  type: DataTypes.STRING
      }
  });
 
  return Book;
};



