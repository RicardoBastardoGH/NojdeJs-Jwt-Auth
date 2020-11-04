import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'
//import {createRoles} from './libs/initialSetup'

//  Rutas
import companyRoutes from './routes/company.routes'
import authRoutes from "./routes/auth.routes";

const app = express()

app.use(cors());
app.options('*', cors());

app.set('pkg',pkg)

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        author: pkg.author,
        description: pkg.description,
        version: pkg.version

    })
})

app.use('/api/companies', companyRoutes)
app.use('/api/auth', authRoutes )

export default app