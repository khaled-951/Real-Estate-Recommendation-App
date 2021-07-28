const jwt = require('jsonwebtoken');

async function authorized(req, res, next){
    if( !req.get('Authorization') ) {req.user = null; return next()};
    if( !req.get('Authorization').split(" ")[1] ) {req.user = null; return next()};

    try{
        req.user = await jwt.verify(req.get('Authorization').split(" ")[1], process.env.JWT_ACCESS_TOKEN, { algorithm: 'HS256' });
        next();
    }
    catch(e) { return res.status(401).send('Token Expired Or You Need To Login'); }
}

module.exports = authorized ;