let Albums = require("../models/Album");
const mongoose = require("mongoose")

/* ----- GET ALL ALBUMS ----- */
const getAllAlbums = async () => Albums.find().populate("genreId");

/* ----- CREATE A ALBUM ----- */
const createAlbum = async (albumInfo) => {
    let newAlbums = new Albums({
        albumUrl:albumInfo.albumUrl,
        title:albumInfo.title,
        artist:albumInfo.artist,
        genreId:albumInfo.genreId,
        releaseDate:albumInfo.releaseDate,
        description:albumInfo.description,
        songs:albumInfo.songs,
        price:albumInfo.price
    })
    return newAlbums.save();

}

/* ----- UPDATE A ALBUM ----- */
const updateAlbum = async (albumId,albumInfo)=>{
    const updateAlbum = await Albums.findByIdAndUpdate(albumId,albumInfo,{new:true});
    return updateAlbum;
}

/* ----- DELETE A ALBUM ----- */
const deleteAlbum = async (albumId) => {
    const album = await Albums.findByIdAndDelete(albumId);
    return album;
}

/* ----- OPERATIONS ON ALBUM ----- */
const getAlbumByFilter = async (filter) => {
    console.log("Work here")
    if(mongoose.Types.ObjectId.isValid(filter)){
        let album = await Albums.findById(filter).populate("genreId");
        return album;
    }else{
        console.log("Work here ,name",filter);

        let album = await Albums.find({"title": {$regex:filter, $options: "i"}}).populate("genreId");
        if(album.length==0){
            album = Albums.find({"artist": {$regex:filter, $options: "i"}}).populate("genreId");
        }
        return album;
    }
}
const getAlbumByGenre = async (genreId) => {
    let album = await Albums.find({"genreId": { $in: [genreId] }})
    return album;
}

module.exports={
    getAllAlbums,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbumByFilter,
    getAlbumByGenre
}