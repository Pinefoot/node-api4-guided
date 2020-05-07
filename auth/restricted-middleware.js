module.exports = (req, res, next) => {
    const {authorizaton} = req.headers;
    const API_SECRET = process.env.API_SECRET 
    if(authorization === API_SECRET){
        next();
    }else{
        res.status(403).json({message: "You have no power here"})
    }
    
    
    
}