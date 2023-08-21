import { Request, Response } from 'express'

import { createFunction, findFunction, edit, removeFunction } from './functions/job_functions'

export interface Job{
    [id: number]: {
    cargo: string
    salario: number
    horaTrabalhada: number
    }
}

export const jobs: Job = {
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

export const getFunctions = (_: Request, res: Response) => {
	return res.status(200).send({jobs})
}

export const getOneFunctionByID = (req: Request, res: Response) =>{

	const id = Number(req.params.id)
	const person = findFunction(id)

	if(person != -1){
		return res.status(200).send({jobs})
	}
	return res.status(404).send({message: 'ID NÃO ENCONTRADO'})

}

export const createNewFunction = (req: Request, res: Response) => {

	const {cargo, salario, horaTrabalhada} = req.body

	if(cargo && salario && horaTrabalhada){
		const newFunction = createFunction({cargo, salario, horaTrabalhada})
		return res.status(201).send({newFunction})
	}
	return res.status(400).send({message: 'ID NÃO ENCONTRADO'})

}

export const editFunction = (req: Request, res: Response) => {

	const id = Number(req.params.id)
	const {cargo, salario, horaTrabalhada} = req.body
	const editedFunction = edit(id,cargo, salario, horaTrabalhada)

	if(editedFunction != -1){
		return res.status(201).send({ jobs })
	}
	return res.status(404).send({message: 'ID NÃO ENCONTRADO'})

}

export const deleteFunction = (req: Request, res: Response) => {

	const id = Number(req.params.id)
	const removed = removeFunction(id)

	if(removed != -1){
		return res.status(201).send({jobs})
	}
	return res.status(404).send({message: 'ID NÃO ENCONTRADO'})

}