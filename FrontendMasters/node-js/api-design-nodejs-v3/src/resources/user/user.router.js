import { Router } from 'express'
import { me, updateMe, getMany, getOne, deleteUser } from './user.controllers'

const router = Router()

router.get('/', getMany)
router.get('/:id', getOne)
router.delete('/:id', deleteUser)
router.get('/', me)
router.put('/', updateMe)

export default router
