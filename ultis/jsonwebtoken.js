const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function customCreateToken(payload, time){
    const token = jwt.sign({payload}, process.env.secretKey, { expiresIn: time });
    return token;
}


function decryptJwt(token){
   
   try {
    const userId = jwt.verify(token, process.env.secretKey) 
    return userId.payload
   } catch (error) {
    console.log(error)
   }
}

const comparePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  };

module.exports = {customCreateToken, decryptJwt, comparePassword}