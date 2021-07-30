const joi = require('joi');

const todoSchema = joi.object({
  text: joi.string().max(200).required(),
});

const validateTodo = (text) => {
  const { error } = todoSchema.validate({ text });
  if (error) {
    error.code = 400;
    throw error;
  }
};

module.exports = {
  validateTodo,
};
