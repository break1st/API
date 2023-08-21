

// export const createNewPerson = (req: Request, res: Response) => {

// 	const {name, age, nacionalidade} = req.body

// 	if(name && age && nacionalidade){
// 		const newPerson = createPerson({name, age, nacionalidade})
// 		return res.status(201).send({newPerson})
// 	}
// 	return res.status(400).send({message: 'ID NÃO ENCONTRADO'})

// }

// export const editPerson = (req: Request, res: Response) => {

// 	const id = Number(req.params.id)
// 	const {name, age, nacionalidade} = req.body
// 	const editedPerson = edit(id, name, age, nacionalidade)

// 	if(editedPerson != -1){
// 		return res.status(201).send({ persons })
// 	}
// 	return res.status(404).send({message: 'ID NÃO ENCONTRADO'})

// }

// export const deletePerson = (req: Request, res: Response) => {

// 	const id = Number(req.params.id)
// 	const removed = removePerson(id)

// 	if(removed != -1){
// 		return res.status(201).send({persons})
// 	}
// 	return res.status(404).send({message: 'ID NÃO ENCONTRADO'})

// }
