import { Router } from 'express'

import { MockPersonsDatabase } from '../../application/database/implementations/MockPersonsDatabase'
import { ConsoleLogger } from '../../application/loggers/implementations/ConsoleLogger'
import { controllerCall } from '../middlewares/controller_call'
import { ExpressPersonsController } from '../../application/controllers/implementations/ExpressPersonsController'
import { authentication } from '../middlewares/authentication'

const router = Router()

const consoleLogger = new ConsoleLogger()
const mockPersonsDatabase = new MockPersonsDatabase(consoleLogger)
const personsController = new ExpressPersonsController(mockPersonsDatabase)

router.get('/persons', authentication, controllerCall(personsController ,'getPersons'))
router.get('/persons/:id',authentication, controllerCall(personsController, 'getPersonById'))
router.post('/persons/new/', authentication,controllerCall(personsController, 'postPerson'))
router.patch('/persons/edit/:id',authentication,controllerCall(personsController, 'editPerson'))
router.delete('/persons/del/:id', authentication,controllerCall(personsController, 'removePerson'))

export default router