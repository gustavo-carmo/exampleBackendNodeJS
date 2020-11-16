import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ExamplesController from '../controllers/ExamplesController';

const examplesRouter = Router();
const examplesController = new ExamplesController();

examplesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      email: Joi.string(),
    },
  }),
  examplesController.index,
);

examplesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  examplesController.show,
);

examplesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
    },
  }),
  examplesController.create,
);

examplesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  examplesController.update,
);

examplesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  examplesController.delete,
);

export default examplesRouter;
