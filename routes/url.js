import {Router} from 'express'

import { urlController } from '../dependencies/depen.js';

export const urlRouter = Router()


urlRouter.get('/',urlController.getAll);
urlRouter.post('/',urlController.createUrl)
urlRouter.delete('/',urlController.deleteById)