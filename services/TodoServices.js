const { notFound } = require('@hapi/boom');
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
  const { matchedCount } = await TodoModel.editTodoBank(id, text);

  if (matchedCount === 0) throw notFound('task not found');
  return true;
};

const deleteTodo = async (id) => {
  const { deletedCount } = await TodoModel.deleteTodoBank(id);

  if (deletedCount === 0) throw notFound('task not found');
  return true;
};

module.exports = {
  listTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
