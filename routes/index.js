const router = require('express').Router();

const userRouter = require('./users');

const movieRouter = require('./movies');

const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-error');

const {
  validateSignUp,
  validateSignIn,
} = require('../middlewares/validator');

const {
  login,
  createUser,
} = require('../controllers/users');

router.post('/signin', validateSignIn, login);

router.post('/signup', validateSignUp, createUser);

router.use(auth);

router.use(userRouter);
router.use(movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(`Страницы по адресу ${req.baseUrl} не существует`));
});

module.exports = router;
