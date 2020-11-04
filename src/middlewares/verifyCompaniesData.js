import Company from "../models/Company";

// Checks de data duplicada en compañias
export const checkDuplicateCompanyData = async (req,res,next) => {

    //verificando nombre duplicado
    const name = await Company.findOne({name: req.body.name})

    if(name) return res.status(400).json({message: 'The name already exist'})

    //verificando email duplicado
    const email = await Company.findOne({email: req.body.email})

    if(email) return res.status(400).json({message: 'The Email already exist'})

    //verificando Rif duplicado
    const rif = await Company.findOne({rif: req.body.rif})

    if(rif) return res.status(400).json({message: 'The Rif already exist'})

    next()

}