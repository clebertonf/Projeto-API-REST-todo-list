const listTodo = (req, resp) => {
  resp.status(200).json({ message: 'ok' });
};

module.exports = {
  listTodo,
};
