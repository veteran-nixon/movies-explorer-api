const router = require('express').Router();

const userRouter = require('./users');

const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-error');

const {
  login,
  createUser,
} = require('../controllers/users');

router.post('/signin', login);

router.post('/signup', createUser);

router.use(auth);

router.use('/users', userRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(`Страницы по адресу ${req.baseUrl} не существует`));
});

module.exports = router;
