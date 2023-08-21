import { Request, Response } from 'express'
import { PersonsDatabase } from '../database/PersonsDatabase'

export class PersonsController {
	constructor(private personDatabase: PersonsDatabase) {}

	async getPersons(_: Request, res: Response): Promise<Response> {
		const persons = await this.personDatabase.getPersons()
		return res.status(200).send({ persons })
	}

	getPersonById(req: Request, res: Response){
		const id = Number(req.params.id)
		const person = this.personDatabase.getOnePersonByID(id)
		if(person !== null){
			return res.status(200).send({person})
		}

		return res.status(404).send({message: 'ID NÃO ENCONTRADO'})
	}
}
