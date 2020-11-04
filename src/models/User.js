import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    /* roles: [{
        ref:"Role",
        type: Schema.Types.ObjectId
    }] */
},{
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
    //aplicando algoritmo de encriptacion
    const salt = await bcrypt.genSalt(10)
    //creando contraseña cifrada
    const hashPassword = await bcrypt.hash(password,salt)
    console.log(hashPassword)
    return hashPassword
}

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password,recivedPassword)
}

export default model ('User', userSchema);