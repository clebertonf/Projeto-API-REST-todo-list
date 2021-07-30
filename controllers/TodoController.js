const TodoService = require('../services/TodoServices');

const createTodo = (req, resp) => {
  const { } = req.body;
  resp.status(200).json({ message: 'ok' });
};

const listTodos = async (req, resp) => {
  const todos = await TodoService.listTodos();
  resp.status(200).json({ message: todos });
};

module.exports = {
  createTodo,
  listTodos,
};
