import User from "../models/User";

export const checkDuplicateUserData = async (req,res,next) => {
    //verificando username duplicado

    const user = await User.findOne({username: req.body.username})

    if(user) return res.status(400).json({message: 'Username already exist'})

    //verificando email duplicado
    const email = await User.findOne({email: req.body.email})

    if(email) return res.status(400).json({message: 'The Email already exist'})

    next()

}