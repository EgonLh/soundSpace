const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');

/*------ JWT Auth ------*/
const verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send("Access Denied / Unauthorized request");
    try {
        token = token.split(' ')[1] // Remove Bearer from string
        if (token === 'null' || !token) return res.status(401).send('Unauthorized request Occured');
        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
        if (!verifiedUser) return res.status(401).send('Unauthorized request')
        req.user = verifiedUser;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Token Invalid");
    }
}
module.exports = {
    verifyUserToken
}