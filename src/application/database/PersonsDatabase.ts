import { Logger } from '../loggers/Logger'

export interface Person {
    id: number
    name: string
    age: number
    nacionalidade: string
}

export interface PersonsDatabase {
    logger: Logger

    getPersons(): Promise<Person[]>
    getOnePersonByID(id: number): Promise<Person | null>
}
