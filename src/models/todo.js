const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {}
  Todo.init({
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checked:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};