const rescue = require('express-rescue');
const TodoService = require('../services/TodoServices');

const listTodos = async (req, resp) => {
  const tasks = await TodoService.listTodos();
  resp.status(200).json({ tasks });
};

const createTodo = rescue(async (req, resp) => {
  const { text } = req.body;

  const task = await TodoService.createTodo(text);
  resp.status(200).json({ message: 'Successfully created', task });
});

const editTodo = rescue(async (req, resp) => {
  const { text, id } = req.body;

  const editedTask = await TodoService.editTodo(id, text);
  resp.status(200).json({ message: 'Successfully edited', editedTask });
});

const deleteTodo = rescue(async (req, resp) => {
  const { id } = req.body;

  await TodoService.deleteTodo(id);
  resp.status(200).json({ message: 'Successfully deleted' });
});

module.exports = {
  listTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
