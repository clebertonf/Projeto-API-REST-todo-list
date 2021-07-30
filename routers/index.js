const router = require('express').Router();
const TodoRouter = require('./TodoRouter');

router.use('/todo', TodoRouter);

module.exports = router;
