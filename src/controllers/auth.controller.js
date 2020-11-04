import User from "../models/User";
import jwt from 'jsonwebtoken'
import config from '../config'

// logica de registro de usuarios
export const signUp = async (req,res) => {
    // destructure
    const {name, lastname, username, email, password, phone, address, birthday} = req.body
    
    const newUser = new User ({
        name, 
        lastname, 
        username, 
        email,
        password: await User.encryptPassword(password),
        phone, 
        address, 
        birthday
    })

    const savedUser = await newUser.save()
    console.log(savedUser)

    //creacion y configuracion del token con clave secreta
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.status(200).json({token})

}

//  Logica de Inicio de Sesion
export const signIn = async (req,res) => {
    
    const userFound = await User.findOne({email: req.body.email})

    if (!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: "Invalid Password"})

    //creacion y configuracion del token con clave secreta
    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })
    res.json({token: token})

}
