import { Request, Response } from 'express'
import { JobsDatabase } from '../../database/JobsDatabase'
import { JobsController } from '../JobsController'

export class ExpressJobsController implements JobsController{
	public jobsDatabase: JobsDatabase

	constructor(jobsDatabase: JobsDatabase) {
		this.jobsDatabase = jobsDatabase
	}

	async getJobs(_: Request, res: Response): Promise<Response> {
		const jobs = await this.jobsDatabase.getJobs()
		return res.status(200).send({ jobs })
	}

	async getJobsById(req: Request, res: Response): Promise<Response> {
		const id = Number(req.params.id)
		const job = await this.jobsDatabase.getOneJobByID(id)
		if (job !== null) {
			return res.status(200).send({ job })
		}
		return res.status(404).send({ message: 'ID NÃO ENCONTRADO' })
	}

	async postJob(req: Request, res: Response): Promise<Response> {
		const { cargo, salario, horaTrabalhada } = req.body
		const jobs = await this.jobsDatabase.createNewJob(cargo,
			salario,
			horaTrabalhada)

		if (jobs !== null) {

			return res.status(201).send({ jobs })
		}
		return res.status(400).send({ message: 'DADOS INCOMPLETOS' })
	}

	async editJob(req: Request, res: Response) : Promise<Response> {
		const id = Number(req.params.id)
		const { cargo, salario, horaTrabalhada } = req.body
		const jobs = await this.jobsDatabase.editInfoJob(id,
			cargo, salario, horaTrabalhada)

		if(jobs !== null){
			return res.status(200).send({ jobs })
		}
		return res.status(400).send({ message: 'ID NÃO ENCONTRADO' })
	}

	async removeJob(req: Request, res: Response) : Promise<Response> {
		const id = Number(req.params.id)
		const jobs = await this.jobsDatabase.removeJob(id)
		if(jobs !== null){
			return res.status(200).send({ jobs })
		}
		return res.status(400).send({ message: 'ID NÃO ENCONTRADO' })
	}
}