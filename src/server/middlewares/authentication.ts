import { NextFunction, Request, Response } from 'express'
import { createDecipher } from 'node:crypto'
import { Logger } from '../../application/loggers/Logger'
import { ConsoleLogger } from '../../application/loggers/implementations/ConsoleLogger'

export const authentication = (
	req: Request,
	res: Response,
	next: NextFunction
)=>{
	const log: Logger = new ConsoleLogger()
	log.createLog('Autenticando')

	const algorithm = 'aes256' // or any other algorithm supported by OpenSSL
	const key = 'password' // string usada para encriptar
	const token = req.headers.authorization // pega o token bearer
	if(token == null){
		return res.status(401).send({message: 'TOKEN INVALIDO' })
	}

	const tokenTratado = token?.split(' ')[1] // o token vem no formato "bearer token", essa linha de código transforma a string em um vetor e pega a posição 1 que é o token
	const decipher = createDecipher(algorithm, key)
	const decrypted = decipher.update(tokenTratado, 'hex', 'utf8') + decipher.final('utf8')
	if(decrypted === 'tokensecreto'){
		return next()
	}
	return res.status(401).send({message: 'TOKEN INVALIDO'})
}