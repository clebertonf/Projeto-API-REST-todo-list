const createTodo = (req, resp) => {
  const { } = req.body;
  resp.status(200).json({ message: 'ok' });
};

const listTodo = (req, resp) => {
  resp.status(200).json({ message: 'ok' });
};

module.exports = {
  createTodo,
  listTodo,
};
