import { Router } from 'express';
import v1Router from './v1';
import v2Router from './v2';
const routes = Router();

routes.use('/api', v1Router);
routes.use('/api', v2Router);

export default routes;