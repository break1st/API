import { Logger } from '../loggers/Logger'

export interface Job {
    id: number
    cargo: string
	salario: number
	horaTrabalhada: number
}

export interface JobsDatabase {
    logger: Logger

    getJobs(): Promise<Job[]>
	getOneJobByID(id: number): Promise<Job | null>
    createNewJob(cargo: string,
        salario: number,
        horaTrabalhada: number): Promise<Job[] | null>
    editInfoJob(id: number,
        cargo: string,
		salario: number,
		horaTrabalhada: number): Promise<Job[] | null>
    removeJob(id: number) : Promise<Job[] | null>

}

