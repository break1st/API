import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import personRoutes from './routes/person_routes'
import jobsRoutes from './routes/job_routes'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(personRoutes)
app.use(jobsRoutes)

app.listen(process.env.PORT || 3000, ()=>{
	console.log('Server running')
})

export default app