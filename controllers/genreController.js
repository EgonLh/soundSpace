// ----- Genre Services ----- //
let genreServices = require("../services/genreServices");
/* ----- UTILITY ----- */
const checkData = (data,res,HttpStatus=200) => data ? (res.status(HttpStatus).json(data)) : (res.status(400).send("Error Occured!"));

/* ----- GET ALL GENRES -----*/
const getAllGenres = async function (req, res, next) {
    try {
        const genres = await genreServices.getAllGenre();
        checkData(genres,res);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- CREATE A GENRE -----*/
const createGenre = async function (req,res,next) {
    try {
        let genreInfo = req.body;
        let newGenre = await  genreServices.createGenre(genreInfo);
        checkData(newGenre,res,201);
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}

/* ----- UPDATE A GENRE -----*/
const updateGenre = async function(req,res,next){
    try {
        let genreId = req.params['genreId'];
        let genreInfo = req.body;
        const updateGenre = await genreServices.updateGenre(genreId,genreInfo);
        checkData(updateGenre,res)
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}

/* ----- DELETE A GENRE -----*/
const deleteGenre = async function(req,res,next){
    //deleting genre related will configure in the front-end (RTK)
    try {
        let genreId = req.params['genreId'];
        const deleteGenre = await genreServices.deleteGenre(genreId);
        checkData(deleteGenre,res)
    }catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}

module.exports =  {
    getAllGenres,
    createGenre,
    updateGenre,
    deleteGenre
}