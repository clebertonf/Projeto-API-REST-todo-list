const TodoService = require('../services/TodoServices');

const createTodo = async (req, resp) => {
  const { text } = req.body;

  await TodoService.createTodo(text);
  resp.status(200).json({ message: 'ok' });
};

const listTodos = async (req, resp) => {
  const todos = await TodoService.listTodos();
  resp.status(200).json({ todos });
};

module.exports = {
  createTodo,
  listTodos,
};
