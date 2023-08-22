import { PersonsDatabase } from '../database/PersonsDatabase'

type DefaultParams = unknown[]

export interface PersonsController {
	personsDatabase : PersonsDatabase

	getPersons(...params: DefaultParams) : Promise<unknown>
	getPersonById(...params: DefaultParams): Promise<unknown>
	postPerson(...params: DefaultParams): Promise<unknown>
	editPerson(...params: DefaultParams) : Promise<unknown>
	removePerson(...params: DefaultParams) : Promise<unknown>
}
