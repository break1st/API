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
    createNewPerson(name: string,
        age: number,
        nacionalidade: string) : Promise<Person[] | null>
    editInfoPerson(id: number
        ,name: string
        ,age: number,
        nacionalidade: string) : Promise <Person[] | null>
    removePerson(id: number) : Promise <Person[] | null>
}

