import { Person, PersonsDatabase } from '../PersonsDatabase'
import { Logger } from '../../loggers/Logger'

interface DatabasePersonData {
    name: string,
    age: number,
    nacionalidade: string
}

interface DatabasePerson {
    [key: number]: DatabasePersonData
}

const databasePersons: DatabasePerson = {
	1: {
		name: 'Breno',
		age: 21,
		nacionalidade: 'Brasileiro',
	},
	2: {
		name: 'Lucas',
		age: 22,
		nacionalidade: 'Ingles',
	},
	3: {
		name: 'Pedro',
		age: 23,
		nacionalidade: 'Espanhol',
	},
}

export class MockPersonsDatabase implements PersonsDatabase {
	public logger: Logger
	constructor(logger: Logger) { this.logger = logger }

	async getPersons(): Promise<Person[]> {
		this.logger.createLog('Listing users')
		const persons: Person[] = []
		Object.keys(databasePersons).forEach((key) => {
			persons.push({ id: Number(key), ...databasePersons[Number(key)] })
		})
		return persons
	}

	async getOnePersonByID(id: number): Promise<Person | null> {
		this.logger.createLog('Searching user for ID')
		const databasePerson: DatabasePersonData = databasePersons[id]
		if (databasePerson !== undefined) {
			return {
				id,
				name: databasePerson.name,
				age: databasePerson.age,
				nacionalidade: databasePerson.nacionalidade
			}
		}
		return null
	}

	async createNewPerson(name: string,
		age: number,
		nacionalidade: string): Promise<Person[] | null> {
		this.logger.createLog('Creating new person')
		if (name && age && nacionalidade) {
			const tam = Number(Object.keys(databasePersons).at(-1) ?? 0)
			const newID: number = tam + 1
			databasePersons[newID] = { name, age, nacionalidade }
			const persons: Person[] = Object.keys(databasePersons).map(
				(key) => ({
					id: Number(key),
					...databasePersons[Number(key)]
				}))
			return persons
		}
		return null
	}

	async editInfoPerson(id: number,
		name: string,
		age: number,
		nacionalidade: string): Promise<Person[] | null>{
		this.logger.createLog('Editing Person')
		const editPerson = databasePersons[id]
		if(editPerson !== undefined){
			databasePersons[id] = { name, age, nacionalidade }
			const persons: Person[] = Object.keys(databasePersons).map(
				(key) => ({
					id: Number(key),
					...databasePersons[Number(key)]
				}))
			return persons
		}
		return null
	}

	async removePerson(id: number) : Promise<Person[] | null>{
		this.logger.createLog('Deleting Person')
		const removedPerson = databasePersons[id]
		if(removedPerson !== undefined){
			delete databasePersons[id]
			const persons: Person[] = Object.keys(databasePersons).map(
				(key) => ({
					id: Number(key),
					...databasePersons[Number(key)]
				}))
			return persons
		}
		return null
	}
}