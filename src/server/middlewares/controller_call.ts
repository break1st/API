import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
const controllerCall = (controller: any, method: string) => {
	return async (req: Request, res: Response) => {
		return await controller[method](req, res)
	}
}

export { controllerCall }
