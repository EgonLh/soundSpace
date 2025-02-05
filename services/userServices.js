let Users = require("../models/Users");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

/* ----- GET ALL USERS ----- */
const getAllUsers = async () => Users.find()

/* ----- Create A User ----- */
const register = async(userInfo) =>{
    // > checking duplication and validation of users information on client side
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userInfo.password,salt);
    let user = new Users({
        name:userInfo.name,
        username: userInfo.username,
        contact: userInfo.contact,
        password:hashPassword,
        billInfo:userInfo.billInfo,
        role: "user",
    });
    return user.save();
}
/* ----- Login as User ----- */
const login = async (userName,password)=>{
    const filter = {
        username: userName
    };
    const user = await Users.findOne(filter);
    if(user)
    {
        console.log('Username ',userName, " Password ",user.password);
        const validPass = await bcrypt.compare(password, user.password);
        console.log(validPass)
        if(validPass)
        {
            return user;
        }
        else
        {
            throw Error("Invalid user or password");
        }
    }
    throw Error("Invalid user or password");;
};

/* ----- UPDATE A User ----- */
const updateUser = async (userId,userInfo)=>{
    const updateUser = await Users.findByIdAndUpdate(userId,userInfo,{new:true});
    return updateUser;
}

/* ----- DELETE A User ----- */
const deleteUser = async(userId)=>{
    const user = await Users.findByIdAndDelete(userId);
    return user;
}


/* ----- OPERATION ON Users ----- */
const getUserByID = async (filter)=>{
    if(mongoose.Types.ObjectId.isValid(filter)){
        let user = await Users.findById(filter);
        return user;
    }else{
        let user = await Users.find({"username": {$regex:`^${filter}$`, $options: "i"}})
        return user;
    }

}


module.exports = {
    getAllUsers,
    register,
    login,
    updateUser,
    deleteUser,
    getUserByID,
}