import { Request, Response } from 'express'
import { PersonsDatabase } from '../../database/PersonsDatabase'
import { PersonsController } from '../PersonsController'

export class ExpressPersonsController implements PersonsController {
	public personsDatabase: PersonsDatabase

	constructor(personsDatabase: PersonsDatabase) {
		this.personsDatabase = personsDatabase
	}

	async getPersons(_: Request, res: Response): Promise<Response> {
		const persons = await this.personsDatabase.getPersons()
		return res.status(200).send({ persons })
	}

	async getPersonById(req: Request, res: Response): Promise<Response> {
		const id = Number(req.params.id)
		const person = await this.personsDatabase.getOnePersonByID(id)
		if (person !== null) {
			return res.status(200).send({ person })
		}
		return res.status(404).send({ message: 'ID NÃO ENCONTRADO' })
	}

	async postPerson(req: Request, res: Response): Promise<Response> {
		const { name, age, nacionalidade } = req.body
		const persons = await this.personsDatabase.createNewPerson(name,
			age,
			nacionalidade)
		if (persons !== null) {
			return res.status(201).send({ persons })
		}
		return res.status(400).send({ message: 'DADOS INCOMPLETOS' })
	}

	async editPerson(req: Request, res: Response) : Promise<Response> {
		const id = Number(req.params.id)
		const {name, age, nacionalidade} = req.body
		const persons = await this.personsDatabase.editInfoPerson(id,
			name, age, nacionalidade)
		if(persons !== null){
			return res.status(200).send({ persons })
		}
		return res.status(400).send({ message: 'ID NÃO ENCONTRADO' })
	}

	async removePerson(req: Request, res: Response) : Promise<Response> {
		const id = Number(req.params.id)
		const persons = await this.personsDatabase.removePerson(id)
		if(persons !== null){
			return res.status(200).send({ persons })
		}
		return res.status(400).send({ message: 'ID NÃO ENCONTRADO' })
	}
}