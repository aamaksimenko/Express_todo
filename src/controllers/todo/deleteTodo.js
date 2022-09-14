const { Todo } = require('../../models');
const { NO_CONTENT, BAD_REQUEST } = require('../../constants');

function deleteTodo(req, res) {
  const { id } = req.params;
  return Todo.findByPk(id)
    .then((todo) => {
      if (!todo) return res.status(BAD_REQUEST).send('The requested todo does not exist');
      return Todo.destroy({ where: { id } })
        .then(() => res.status(NO_CONTENT).send())
        .catch((error) => res.status(BAD_REQUEST).send(error.message));
    })
    .catch((error) => res.status(BAD_REQUEST).send(error.message));
};

module.exports = deleteTodo;