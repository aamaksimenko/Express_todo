const express = require('express');

const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todos');

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', updateTodo);

module.exports = router;