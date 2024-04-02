import {Router} from 'express'

import { urlController } from '../dependencies/depen.js';
import { authenticate } from '../middlewares/auth.js';
export const urlRouter = Router()


urlRouter.get('/getall',urlController.getAll);
urlRouter.post('/',authenticate(),urlController.createUrl)
urlRouter.delete('/:id',authenticate(),urlController.deleteById)
urlRouter.get('/getById',authenticate(),urlController.getById)
urlRouter.get('/getByCode/:code',authenticate(),urlController.getByUrlCode)
urlRouter.patch('/update/url',authenticate(),urlController.updateById)