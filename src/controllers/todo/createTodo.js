const { Todo } = require('../../models');
const { CREATED, BAD_REQUEST } = require('../../constants');

function createTodo(req, res) {
  return Todo.create({
    message: req.body.message,
  })
    .then((todo) => res.status(CREATED).send(todo))
    .catch((error) => res.status(BAD_REQUEST).send(error.message));
};

module.exports = createTodo;