const { Todo } = require('../../models');
const { OK, BAD_REQUEST } = require('../../constants');

function getTodos(req, res) {
  return Todo.findAll( {order: [['id', 'ASC']]} )
    .then((todos) => res.status(OK).send(todos))
    .catch((error) => res.status(BAD_REQUEST).send(error.message));
};

module.exports = getTodos;