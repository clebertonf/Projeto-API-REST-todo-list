const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTodoBank = async (text) => {
  try {
    const { insertedId } = await connection()
      .then((db) => db.collection('to-do-collection').insertOne({ text }));
    return await connection()
      .then((db) => db.collection('to-do-collection').find({ _id: insertedId }).toArray());
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const listTodosBank = async () => {
  try {
    return await connection()
      .then((db) => db.collection('to-do-collection').find({}).toArray());
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const editTodoBank = async (id, text) => {
  try {
    const { matchedCount } = await connection()
      .then((db) => db.collection('to-do-collection')
        .updateOne({ _id: ObjectId(id) }, { $set: { text } }));
    const todoEdit = await connection()
      .then((db) => db.collection('to-do-collection').find({ _id: ObjectId(id) }).toArray());
    return { matchedCount, todoEdit };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteTodoBank = async (id) => {
  try {
    return await connection()
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
