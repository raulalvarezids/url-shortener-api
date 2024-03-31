import express from 'express'
import { json } from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import { urlRouter } from './routes/url.js';
import { urlController } from './dependencies/depen.js';
import { userRouter } from './routes/user.js';


const app = express()
app.disable('x-powered-by')
app.use(json())

const port = process.env.PORT || 3000 
const url = process.env.URLMONGO



mongoose.connect(url)
    .then(() => console.log("conectado a la base de datos"))
    .catch((error)=> console.log("error" + error));    

app.listen(port, () => {
    console.log('server up url ')
});

app.get('/:code',urlController.getByCode)

app.use('/urls',urlRouter)
app.use('/user',userRouter)
