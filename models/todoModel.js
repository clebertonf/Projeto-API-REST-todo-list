const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTodoBank = async (text) => {
  try {
    const { insertedId } = await connection()
      .then((db) => db.collection('to-do-collection').insertOne({ text }));
    const todo = await connection()
      .then((db) => db.collection('to-do-collection').find({ _id: insertedId }).toArray());
    return todo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const listTodosBank = async () => {
  try {
    const todos = await connection()
      .then((db) => db.collection('to-do-collection').find({}).toArray());
    return todos;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const editTodoBank = async (id, text) => {
  try {
    await connection()
      .then((db) => db.collection('to-do-collection')
        .updateOne({ _id: ObjectId(id) }, { $set: { text } }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteTodoBank = async (id) => {
  try {
    await connection()
      .then((db) => db.collection('to-do-collection').deleteOne({ _id: ObjectId(id) }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  createTodoBank,
  listTodosBank,
  editTodoBank,
  deleteTodoBank,
};
