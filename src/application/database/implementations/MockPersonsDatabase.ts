import { Person, PersonsDatabase } from '../PersonsDatabase'
import { Logger } from '../../loggers/Logger'

interface DatabasePersonData{
    name: string,
    age: number,
    nacionalidade: string
}

interface DatabasePerson {
    [key: number]: DatabasePersonData
}

const databasePersons: DatabasePerson = {
	1:{
		name: 'Breno',
		age: 21,
		nacionalidade: 'Brasileiro',
	},
	2:{
		name: 'Lucas',
		age: 22,
		nacionalidade: 'Ingles',
	},
	3:{
		name: 'Pedro',
		age: 23,
		nacionalidade: 'Espanhol',
	},
}

export class MockPersonsDatabase implements PersonsDatabase {
	public logger : Logger

	constructor(logger: Logger){ this.logger = logger }

	async getPersons(): Promise<Person[]> {
		this.logger.createLog('Listing users')

		const persons : Person[] = []
		Object.keys(databasePersons).forEach((key)=>{
			persons.push({id: Number(key), ...databasePersons[Number(key)]})
		})
		return persons
	}

	async getOnePersonByID(id: number): Promise<Person | null> {
		const databasePerson: DatabasePersonData = databasePersons[id]

		this.logger.createLog('Searching user for ID')

		if(databasePerson !== undefined){
			return {
				id,
				name: databasePerson.name,
				age: databasePerson.age,
				nacionalidade: databasePerson.nacionalidade
			}
		}
		return null
	}
}
