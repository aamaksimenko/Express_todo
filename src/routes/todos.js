const express = require('express');

const createTodo = require('../controllers/todo/createTodo');
const getTodos = require('../controllers/todo/getTodos');
const deleteTodo = require('../controllers/todo/deleteTodo');
const updateTodo = require('../controllers/todo/updateTodo');

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', updateTodo);

module.exports = router;