import { Router } from 'express';
import examplesRouter from '@modules/examples/routes/examples.routes';

const routes = Router();

routes.use('/examples', examplesRouter);

export default routes;
