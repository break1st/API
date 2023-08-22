import { Router } from 'express'

import { MockJobsDatabase } from '../../application/database/implementations/MockJobsDatabase'
import { ConsoleLogger } from '../../application/loggers/implementations/ConsoleLogger'
import { controllerCall } from '../middlewares/controller_call'
import { ExpressJobsController } from '../../application/controllers/implementations/ExpressJobsControllers'
import { authentication } from '../middlewares/authentication'

const router = Router()

const consoleLogger = new ConsoleLogger()
const mockJobsDatabase = new MockJobsDatabase(consoleLogger)
const jobsController = new ExpressJobsController(mockJobsDatabase)

router.get('/jobs', authentication ,controllerCall(jobsController, 'getJobs'))
router.get('/jobs/:id', authentication ,controllerCall(jobsController, 'getJobsById'))
router.post('/jobs/new/', authentication,controllerCall(jobsController, 'postJob'))
router.patch('/jobs/edit/:id', authentication, controllerCall(jobsController, 'editJob'))
router.delete('/jobs/del/:id', authentication, controllerCall(jobsController, 'removeJob'))

export default router