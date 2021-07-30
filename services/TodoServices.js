const TodoModel = require('../models/todoModel');

const listTodos = async () => {
  const todos = await TodoModel.listTodosBank();
  return todos;
};

module.exports = {
  listTodos,
};
