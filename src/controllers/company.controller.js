import Company from '../models/Company'

// logica de las rutas

export const createCompany = async (req,res) => {
    
    //destructure
    const {name, rif, email, phone, address, razon_social} = req.body
    
    const newCompany = new Company({name, rif, email, phone, address, razon_social})
    
    const companySaved = await newCompany.save()
    
    res.status(201).json(companySaved)
}

export const getCompanies = async (req,res) => {
    
    const companies = await Company.find();
    res.json(companies)
}

export const getCompanyById = async (req,res) => {
    const company = await Company.findById(req.params.companyId)
    res.status(200).json(company)
}

export const updateCompanyById = async (req,res) => {
    console.log('')
    console.log('')
    console.log(req.params.companyId)
    console.log(req.body)
    const updatedCompany = await Company.findByIdAndUpdate(req.params.companyId,req.body, {new:true})
    res.status(200).json(updatedCompany)
}

export const deleteCompanyById = async (req,res) => {
    await Company.findByIdAndDelete(req.params.companyId)
    res.status(204).json()
}