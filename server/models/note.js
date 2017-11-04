module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
      content: {
	  type: DataTypes.STRING,
	  allowNull: false
      }
  });
    
  return Note;
};
