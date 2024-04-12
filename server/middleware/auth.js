const jwtDecoder = require('../utils/jwtToken');

const authorizeAdmin = async (req, res, next) => {
    try{
        const token = req.headers.authorisation;
        console.log("here", req.headers, token);

        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        if(decodedToken.user.type == "admin"){
            return next();
        }
        else{
            return res.json({status: "error", message: "Unathorised for admin"})
        }

    }
    catch(err){
        console.error(err);
        return res.json({status: 'error', message: 'Server Error'});
    }
};

const authorizeStudent = async (req, res, next) => {
    try{
        const token = req.headers.authorisation;
        console.log("here", req.headers, token);

        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);

        if(decodedToken.user.type == "student"){
            return next();
        }
        else{
            return res.json({status: "error", message: "Unathorised for student"})
        }
    }
    catch(err){
        console.error(err);
        return res.json({status: 'error', message: 'Server Error'});
    }
};

const authorizeComplaintRoute = async (req, res, next) => {
    try{
        const token = req.headers.authorisation;
        console.log("here", req.headers, token);
        
        const decodedToken = jwtDecoder(token);
        console.log(decodedToken);
        
        return next();
    }
    catch(err){
        console.error(err);
        return res.json({status: 'error', message: 'Server Error'});
    }
}

module.exports = {
    authorizeAdmin,
    authorizeStudent,
    authorizeComplaintRoute,
};