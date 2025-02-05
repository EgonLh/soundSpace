// ----- Album Services ----- //
let albumServices = require("../services/albumServices");

/* ----- UTILITY ----- */
const checkData = (data,res,HttpStatus=200) => data ? (res.status(HttpStatus).json(data)) : (res.status(400).send("Error Occured!"));

/* ----- GET ALL ALBUMS -----*/
const getAllAlbums = async function (req, res, next) {
    try {
        const albums = await albumServices.getAllAlbums();
        checkData(albums, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- Create A ALBUM ----- */
const createAlbum = async function (req, res, next) {
    // ----- Creating Album ----- //
   try {
       let albumInfo = req.body;
       const newAlbum = await albumServices.createAlbum(albumInfo);
       checkData(newAlbum,res,201);
   }catch (e) {
       console.error(e);
       res.status(500).send("Internal Server Error");
   }
};

/* ----- UPDATE A ALBUM ----- */
const updateAlbum = async function (req, res, next) {
    // ----- Updating Album ----- //
    try {
        let albumId = req.params['albumId'];
        let albumInfo = req.body;
        const updateAlbum = await albumServices.updateAlbum(albumId, albumInfo);
        checkData(updateAlbum, res);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- DELETE A ALBUM ----- */
const deleteAlbum = async function (req, res, next) {
    // ----- Deleting Album ----- //
    try {
        let albumId = req.params['albumId'];
        const deleteAlbum = await albumServices.deleteAlbum(albumId);
        checkData(deleteAlbum, res);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- OPERATION ON ALBUMS ----- */
const getIdByFilter = async function (req, res, next) {
    // ----- GET Album By Filters----- //
    try {
        let filter = req.params['filter'];
        const albums = await albumServices.getAlbumByFilter(filter);
        checkData(albums, res);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

const getAlbumByGenre = async function (req, res, next) {
    // ----- GET Album By GENRE----- //
    try {
        let genreId = req.params['genreId'];
        const album = await albumServices.getAlbumByGenre(genreId);
        console.log("Here",album)
        checkData(album, res);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }

};

module.exports = {
    getAllAlbums,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getIdByFilter,
    getAlbumByGenre
};