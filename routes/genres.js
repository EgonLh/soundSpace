var express = require('express');
var router = express.Router();
const genreController = require("../controllers/genreController");

/* ----- GET ALL GENRES ----- */
router.get('/', genreController.getAllGenres);

/* ----- CREATE A GENRE ----- */
router.post('/', genreController.createGenre);

/* ----- UPDATE A GENRE ----- */
router.put('/:genreId', genreController.updateGenre);

/* ----- DELETE A GENRE ----- */
router.delete('/:genreId', genreController.deleteGenre);

module.exports = router;