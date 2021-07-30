const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

router.get('/list', TodoController.listTodo);

module.exports = router;
