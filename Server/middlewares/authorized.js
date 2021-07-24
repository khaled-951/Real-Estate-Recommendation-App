const jwt = require('jsonwebtoken');

async function authorized(req, res, next){
    if( !req.body.accessToken ) return res.status(400).send('Please Provide An Access Token Or Login');
    try{
        await jwt.verify(req.body.accessToken, process.env.JWT_ACCESS_TOKEN);
        next();
    }
    catch(e) { return res.status(401).send('Token Expired'); }
}

module.exports = authorized ;