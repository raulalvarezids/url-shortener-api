import {Router} from 'express'

import { urlController } from '../dependencies/depen.js';
import { authenticate } from '../middlewares/auth.js';
export const urlRouter = Router()


urlRouter.get('/getall',urlController.getAll);
urlRouter.post('/',authenticate(),urlController.createUrl)
urlRouter.delete('/',authenticate(),urlController.deleteById)
urlRouter.get('/getById',authenticate(),urlController.getById)