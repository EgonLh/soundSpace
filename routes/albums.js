var express = require('express');
var router = express.Router();
const albumController = require("../controllers/albumController");

/* ----- GET ALBUMS ----- */
router.get('/', albumController.getAllAlbums);

/* ----- CREATE A ALBUM ----- */
router.post('/', albumController.createAlbum);

/* ----- UPDATE A ALBUM ----- */
router.put('/:albumId', albumController.updateAlbum);

/* ----- DELETE A ALBUM ----- */
router.delete('/:albumId', albumController.deleteAlbum);

/* ----- GET ALBUM BY NAME OR ID OR TITLE ----- */
router.get('/:filter', albumController.getIdByFilter);

/* ----- GET ALBUM BY GENRE ----- */
router.get('/genre/:genreId', albumController.getAlbumByGenre);

module.exports = router;