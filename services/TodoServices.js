const TodoModel = require('../models/todoModel');

const createTodo = async (text) => {
  await TodoModel.createTodoBank(text);
  return true;
};

const listTodos = async () => {
  const todos = await TodoModel.listTodosBank();
  return todos;
};

module.exports = {
  listTodos,
  createTodo,
};
