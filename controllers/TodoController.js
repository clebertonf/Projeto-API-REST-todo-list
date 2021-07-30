const rescue = require('express-rescue');
const TodoService = require('../services/TodoServices');

const listTodos = async (req, resp) => {
  const todos = await TodoService.listTodos();
  resp.status(200).json({ todos });
};

const createTodo = rescue(async (req, resp) => {
  const { text } = req.body;

  await TodoService.createTodo(text);
  resp.status(200).json({ message: 'Successfully created' });
});

const editTodo = rescue(async (req, resp) => {
  const { text, id } = req.body;

  await TodoService.editTodo(id, text);
  resp.status(200).json({ message: 'Successfully edited' });
});

const deleteTodo = rescue(async (req, resp) => {
  const { id } = req.body;

  await TodoService.editTodo(id);
  resp.status(200).json({ message: 'Successfully deleted' });
});

module.exports = {
  listTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
