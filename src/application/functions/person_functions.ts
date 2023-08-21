import { persons } from '../person'


export const createPerson = ({name,
	age,
	nacionalidade}
       : {name: string, age: number, nacionalidade: string}) =>{

	const tam = Number(Object.keys(persons).at(-1) ?? 0)

	const newPerson = {name, age, nacionalidade}

	persons[tam + 1] = newPerson

	return persons

}

export const findPerson = (id: number) =>{

	const person = persons[id]

	if(person != undefined){
		return persons[id]
	}
	return -1

}

export const edit = (id: number,
	name: string,
	age: number,
	nacionalidade: string) =>{

	const person = persons[id]

	if(person != undefined){

		const editedPerson = {name, age, nacionalidade}
		persons[id] = editedPerson
		return persons

	}

	return -1

}

export const removePerson = (id: number) => {

	const person = persons[id]

	if(person != undefined){

		delete(persons[id])

		return persons
	}

	return -1

}