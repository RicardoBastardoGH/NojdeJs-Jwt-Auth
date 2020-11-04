import {Schema, model} from 'mongoose'

const companySchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    rif:{
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    razon_social: {
        type: String,
        required: true
    },
    /* password: {
        type: String,
        required: true
    } */
    },
    {
    timestamps: true,
    versionKey: false
})


export default model ('Company', companySchema);