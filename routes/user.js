import {Router} from 'express'
import { userController } from '../dependencies/depen.js'
export const userRouter = Router()


userRouter.post('/',userController.createUser);
userRouter.post('/login',userController.login)



userRouter.get('/get',userController.getAll)

// userRouter.post('/',urlController.createUrl)
// userRouter.delete('/',urlController.deleteById)