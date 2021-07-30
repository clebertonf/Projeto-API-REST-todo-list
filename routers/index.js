const router = require('express').Router();
const TodoRouter = require('./TodoRouter');

router.use('/', TodoRouter);

module.exports = router;
