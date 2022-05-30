const router = require('express').Router();

const {
  validateMovieId,
  validateMovie,
} = require('../middlewares/validator');

const {
  getMovie,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

// возвращает все сохранённые текущим  пользователем фильмы
// GET /movies
router.get('/movies', getMovie);

// создаёт фильм с переданными в теле данными схемы Movie
// POST /movies
router.post('/movies', validateMovie, createMovie);

// удаляет сохранённый фильм по id
// DELETE /movies/_id
router.delete('/movies/:movieId', validateMovieId, deleteMovie);

module.exports = router;
