let Genres = require("../models/Genres");

/* ----- GET ALL GENRES ----- */
const getAllGenre = async () => Genres.find();

/* ----- CREATE A GENRE ----- */
const createGenre = async (genreInfo) => {
    let newGenre = new Genres({
        genre:genreInfo.genre,
        description:genreInfo.description
    })
    return newGenre.save();
}

/* ----- UPDATE A GENRE ----- */
const updateGenre = async (genreId,genreInfo)=>{
    const updatedGenre = await Genres.findByIdAndUpdate(genreId,genreInfo,{new:true});
    return updatedGenre;
}

/* ----- DELETE A GENRE ----- */
const deleteGenre = async (genreId) => {
    const genre = await Genres.findByIdAndDelete(genreId);
    return genre;
}

module.exports={
    createGenre,
    getAllGenre,
    updateGenre,
    deleteGenre
}