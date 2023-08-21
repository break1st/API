import { Router } from 'express'

import { PersonsController } from '../../application/controllers/PersonsController'
import { MockPersonsDatabase } from '../../application/database/implementations/MockPersonsDatabase'
import { ConsoleLogger } from '../../application/loggers/implementations/ConsoleLogger'
import { controllerCall } from '../controller_call'


const router = Router()

const consoleLogger = new ConsoleLogger()
const mockPersonsDatabase = new MockPersonsDatabase(consoleLogger)
const personsController = new PersonsController(mockPersonsDatabase)

router.get('/persons', controllerCall(personsController ,'getPersons'))
router.get('/persons/:id', controllerCall(personsController, 'getPersonById'))

// router.post('/persons/new/', createNewPerson)
// router.patch('/persons/edit/:id',editPerson)
// router.delete('/persons/del/:id', deletePerson)



export default router
