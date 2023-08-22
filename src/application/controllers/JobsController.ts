import { JobsDatabase } from '../database/JobsDatabase'

type DefaultParams = unknown[]

export interface JobsController {
	jobsDatabase : JobsDatabase

	getJobs(...params: DefaultParams) : Promise<unknown>
	getJobsById(...params: DefaultParams): Promise<unknown>
	postJob(...params: DefaultParams): Promise<unknown>
	editJob(...params: DefaultParams) : Promise<unknown>
	removeJob(...params: DefaultParams) : Promise<unknown>
}
