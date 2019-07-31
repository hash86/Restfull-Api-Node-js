const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){
    //Format Of Token
    //Authorization : Bearer <access_token>

    //Verify Token 
    const bearerHeader = req.headers['authorization'];
    if ( typeof bearerHeader !== "undefined"){
        // Split at the space 
        const bearer = bearerHeader.split(' ');
        //Get token from array
        const [,bearerToken] = bearer;
        //Set the token
        req.token = bearerToken;

        jwt.verify(req.token,'secretkey', (err,authData)=>{
            if(err){
                res.sendStatus(403);
            }
            else{
             // authData : contain user data
                //res.json({message:authData});
                //Next middleware
                next();
            }
        });

        
    }
    else {
        //Forbidden
        res.sendStatus(403);
    }
}

module.exports=verifyToken;