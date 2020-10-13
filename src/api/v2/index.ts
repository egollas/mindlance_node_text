import { Router } from 'express';
import Parse from './parse';
const routes = Router();

routes.use('/v2', Parse);

export default routes;