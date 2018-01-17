module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
	    type: DataTypes.STRING,
	    allowNull: false
    },
    description: {
	    type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  });

  Book.associate = (models) => {
    Book.hasMany(models.Note, {
      foreignKey: 'bookId',
      as: 'notes',
    });
  };


  return Book;
};
