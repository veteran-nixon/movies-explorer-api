const router = require('express').Router();

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

// возвращает информацию о текущем пользователе (email и имя)
// GET /users/me
router.get('/users/me', getCurrentUser);

// обновляет информацию текущего пользователя (email и имя)
// PATCH /users/me
router.patch('/users/me', updateUser);

module.exports = router;
