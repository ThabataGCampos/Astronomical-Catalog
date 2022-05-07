import express from 'express'
import { getIndex, getDetails, getRegister, postRegister, getDel, getEdit, postEdit } from '../controller/controllador.js'

export const routers = express.Router()

routers.get('/', getIndex);
routers.get('/details/:id', getDetails);
routers.get('/newregister', getRegister);
routers.post('/register', postRegister);
routers.get('/delete/:id', getDel);

routers.get('/edit/:id', getEdit);
routers.post('/edit/:id', postEdit);