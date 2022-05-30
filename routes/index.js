const router = require('express').Router();

const userRouter = require('./users');

const movieRouter = require('./movies');

const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-error');

const {
  login,
  createUser,
} = require('../controllers/users');

router.post('/signin', login);

router.post('/signup', createUser);

router.use(auth);

router.use(userRouter);
router.use(movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(`Страницы по адресу ${req.baseUrl} не существует`));
});

module.exports = router;
