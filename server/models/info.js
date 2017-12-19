module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('Info', {
    cover: {
	    type: DataTypes.STRING
    },
    overview: {
	    type: DataTypes.STRING
    }
  });

  return Info;
};
