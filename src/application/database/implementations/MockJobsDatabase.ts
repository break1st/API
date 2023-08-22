import { Job, JobsDatabase } from '../JobsDatabase'
import { Logger } from '../../loggers/Logger'

interface DatabaseJobData {
    cargo: string
	salario: number
	horaTrabalhada: number
}

interface DatabaseJob {
    [id: number]: DatabaseJobData
}

const databaseJobs: DatabaseJob = {
	1:{
		cargo: 'Estagiario',
		salario: 10,
		horaTrabalhada: 6,
	},
	2:{
		cargo: 'Programador',
		salario: 15,
		horaTrabalhada: 8,
	},
	3:{
		cargo: 'Officeboy',
		salario: 13,
		horaTrabalhada: 8,
	},
}

export class MockJobsDatabase implements JobsDatabase {
	public logger: Logger
	constructor(logger: Logger) { this.logger = logger }

	async getJobs(): Promise<Job[]> {
		this.logger.createLog('Listing jobs')
		const jobs: Job[] = []
		Object.keys(databaseJobs).forEach((key) => {
			jobs.push({ id: Number(key), ...databaseJobs[Number(key)] })
		})
		return jobs
	}

	async getOneJobByID(id: number): Promise<Job | null> {
		this.logger.createLog('Searching job for ID')
		const databaseJob: DatabaseJobData = databaseJobs[id]
		if (databaseJob !== undefined) {
			return {
				id,
				cargo: databaseJob.cargo,
				salario: databaseJob.salario,
				horaTrabalhada: databaseJob.horaTrabalhada
			}
		}
		return null
	}

	async createNewJob(cargo: string,
		salario: number,
		horaTrabalhada: number): Promise<Job[] | null> {
		this.logger.createLog('Creating new Job')
		if (cargo && salario && horaTrabalhada) {
			const tam = Number(Object.keys(databaseJobs).at(-1) ?? 0)
			const newID: number = tam + 1
			databaseJobs[newID] = { cargo, salario, horaTrabalhada }
			const jobs: Job[] = Object.keys(databaseJobs).map(
				(key) => ({
					id: Number(key),
					...databaseJobs[Number(key)]
				}))
			return jobs
		}
		return null
	}

	async editInfoJob(id: number,
		cargo: string,
		salario: number,
		horaTrabalhada: number): Promise<Job[] | null>{
		this.logger.createLog('Editing job')
		const editJob = databaseJobs[id]
		if(editJob !== undefined){
			databaseJobs[id] = { cargo, salario, horaTrabalhada }
			const jobs: Job[] = Object.keys(databaseJobs).map(
				(key) => ({
					id: Number(key),
					...databaseJobs[Number(key)]
				}))
			return jobs
		}
		return null
	}

	async removeJob(id: number) : Promise<Job[] | null>{
		this.logger.createLog('Deleting job')
		const removedJob = databaseJobs[id]
		if(removedJob !== undefined){
			delete databaseJobs[id]
			const jobs: Job[] = Object.keys(databaseJobs).map(
				(key) => ({
					id: Number(key),
					...databaseJobs[Number(key)]
				}))
			return jobs
		}
		return null
	}
}