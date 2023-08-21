import { Logger } from '../Logger'

export class ConsoleLogger implements Logger{
	createLog<T>(data: T): void {
		console.log(data)
	}
}