const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

router.post('/create', TodoController.createTodo);
router.get('/list', TodoController.listTodos);
router.patch('/update', TodoController.editTodo);
router.delete('/delete', TodoController.deleteTodo);

module.exports = router;
