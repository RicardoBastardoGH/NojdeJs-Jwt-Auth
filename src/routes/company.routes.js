import {Router} from 'express'
const router = Router()

import * as companyCtrl from "../controllers/company.controller"; 
import {verifyToken, verifyCompaniesData } from '../middlewares'

router.post('/', verifyToken, verifyCompaniesData.checkDuplicateCompanyData, companyCtrl.createCompany)

router.get('/', companyCtrl.getCompanies)

router.get('/:companyId', companyCtrl.getCompanyById)

router.put('/:companyId', verifyToken, verifyCompaniesData.checkDuplicateCompanyData, companyCtrl.updateCompanyById)

router.delete('/:companyId', verifyToken, companyCtrl.deleteCompanyById)

export default router;