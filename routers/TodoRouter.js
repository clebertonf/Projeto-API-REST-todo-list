const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

router.post('/create', TodoController.listTodo);
router.get('/list', TodoController.listTodo);
router.patch('/update', TodoController.listTodo);
router.delete('/delete', TodoController.listTodo);

module.exports = router;
