import {Router} from 'express'
import { userController } from '../dependencies/depen.js'
import { authenticate } from '../middlewares/auth.js';

export const userRouter = Router()


userRouter.post('/',userController.createUser);
userRouter.post('/login',userController.login)


userRouter.get('/get',authenticate(),userController.getAll)

// userRouter.post('/',urlController.createUrl)
// userRouter.delete('/',urlController.deleteById)