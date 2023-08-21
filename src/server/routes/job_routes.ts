import { Router } from 'express'

import { getFunctions, getOneFunctionByID, createNewFunction, editFunction, deleteFunction } from '../../application/job'


const router = Router()

router.get('/funcoes', getFunctions)
router.get('/funcoes/:id', getOneFunctionByID)
router.post('/funcoes/new/', createNewFunction)
router.patch('/funcoes/edit/:id',editFunction)
router.delete('/funcoes/del/:id', deleteFunction)



export default router
