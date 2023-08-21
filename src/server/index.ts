import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import pessoasRoutes from './routes/person_routes'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(pessoasRoutes)

app.listen(process.env.PORT || 3000, ()=>{
	console.log('Server running')
})

export default app