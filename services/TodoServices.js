const TodoModel = require('../models/todoModel');
const TodoSchema = require('../schemas/todoSchema');

const createTodo = async (text) => {
  TodoSchema.validateTodo(text);
  await TodoModel.createTodoBank(text);
  return true;
};

const listTodos = async () => {
  const todos = await TodoModel.listTodosBank();
  return todos;
};

const editTodo = async (id, text) => {
  TodoSchema.validateTodo(text);
  await TodoModel.editTodoBank(id, text);
  return true;
};

module.exports = {
  listTodos,
  createTodo,
  editTodo,
};
