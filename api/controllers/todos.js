const { Todo } = require('../models');

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

module.exports = {
  getTodos(req, res) {
    return Todo.findAll( {order: [['id', 'ASC']]} )
      .then((todos) => res.status(OK).send(todos))
      .catch((error) => res.status(BAD_REQUEST).send(error.message));
  },
  createTodo(req, res) {
    return Todo.create({
      message: req.body.message,
    })
      .then((todo) => res.status(CREATED).send(todo))
      .catch((error) => res.status(BAD_REQUEST).send(error.message));
  },
  deleteTodo(req, res) {
    const { id } = req.params;
    return Todo.findByPk(id)
      .then((todo) => {
        if (!todo) return res.status(BAD_REQUEST).send('The requested todo does not exist');
        return Todo.destroy({ where: { id } })
          .then(() => res.status(NO_CONTENT).send())
          .catch((error) => res.status(BAD_REQUEST).send(error.message));
      })
      .catch((error) => res.status(BAD_REQUEST).send(error.message));
  },
  updateTodo(req, res) {
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
  }
}