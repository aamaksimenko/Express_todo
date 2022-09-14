const { Todo } = require('../../models');
const { OK, BAD_REQUEST } = require('../../constants');

function updateTodo(req, res) {
  const { id } = req.params;
  const { message, checked } = req.body;
  return Todo.findByPk(id)
    .then((todo) => {
      if (!todo) return res.status(BAD_REQUEST).send('The requested todo does not exist');
      return Todo.update({ message, checked }, { where: { id } })
        .then(() => res.status(OK).send('Todo updated'))
        .catch((error) => res.status(BAD_REQUEST).send(error.message));
    })
    .catch((error) => res.status(BAD_REQUEST).send(error.message));
};

module.exports = updateTodo;