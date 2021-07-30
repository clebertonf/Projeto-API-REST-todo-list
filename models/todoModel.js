const connection = require('./connection');

const createTodoBank = async () => {
  try {
    const createTodo = await connection()
      .then((db) => db.collection('to-do-collection').insertOne({}));
  } catch (err) {
    console.log(err);
  }
};

const listTodosBank = async () => {
  try {
    const todos = await connection()
      .then((db) => db.collection('to-do=collection').find({}).toArray());
    return todos;
  } catch (err) {
    console.log(err);
  }
};

const editTodoBank = async () => {
  try {

  } catch (err) {
    console.log(err);
  }
};

const deleteTodoBank = async () => {
  try {

  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTodoBank,
  listTodosBank,
};
