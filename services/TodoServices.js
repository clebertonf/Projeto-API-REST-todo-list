const TodoModel = require('../models/todoModel');
const TodoSchema = require('../schemas/todoSchema');

const listTodos = async () => {
  const todos = await TodoModel.listTodosBank();
  return todos;
};

const createTodo = async (text) => {
  TodoSchema.validateTodo(text);
  const todo = await TodoModel.createTodoBank(text);
  return todo;
};

const editTodo = async (id, text) => {
  TodoSchema.validateTodo(text);
  await TodoModel.editTodoBank(id, text);
  return true;
};

const deleteTodo = async (id) => {
  await TodoModel.deleteTodoBank(id);
  return true;
};

module.exports = {
  listTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
