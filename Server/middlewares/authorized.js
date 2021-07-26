const jwt = require('jsonwebtoken');

async function authorized(req, res, next){
    if( !req.get('Authorization').split(" ")[1] ) return res.status(400).send('Please Provide An Access Token Or Login');
    try{
        req.user = await jwt.verify(req.get('Authorization').split(" ")[1], process.env.JWT_ACCESS_TOKEN, { algorithm: 'HS256' });
        next();
    }
    catch(e) { return res.status(401).send('Token Expired'); }
}

module.exports = authorized ;