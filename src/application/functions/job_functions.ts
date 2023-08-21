import { jobs } from '../job'

export const createFunction = ({cargo,
	salario,
	horaTrabalhada}
       : {cargo: string, salario: number, horaTrabalhada: number}) =>{

	const tam = Number(Object.keys(jobs).at(-1) ?? 0)

	const newFunction = {cargo, salario, horaTrabalhada}

	jobs[tam + 1] = newFunction

	return jobs

}

export const findFunction = (id: number) =>{

	const funcao = jobs[id]

	if(funcao != undefined){
		return funcao
	}
	return -1

}

export const edit = (id: number,
	cargo: string,
	salario: number,
	horaTrabalhada: number) =>{

	const funcao = jobs[id]

	if(funcao != undefined){

		const editedFunction = {cargo, salario, horaTrabalhada}
		jobs[id] = editedFunction
		return jobs

	}

	return -1

}

export const removeFunction = (id: number) => {

	const funcao = jobs[id]

	if(funcao != undefined){

		delete(jobs[id])

		return jobs
	}

	return -1

}
