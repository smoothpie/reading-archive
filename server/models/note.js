module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    content: {
	    type: DataTypes.STRING,
	    allowNull: false
    }
  });

  Note.associate = (models) => {
    Note.belongsTo(models.Book, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE',
    });
  };

  return Note;
};
