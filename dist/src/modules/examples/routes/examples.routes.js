"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ExamplesController_1 = __importDefault(require("../controllers/ExamplesController"));
var examplesRouter = express_1.Router();
var examplesController = new ExamplesController_1.default();
examplesRouter.get('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.QUERY] = {
        name: celebrate_1.Joi.string(),
        email: celebrate_1.Joi.string(),
    },
    _a)), examplesController.index);
examplesRouter.get('/:id', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    _b)), examplesController.show);
examplesRouter.post('/', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
    },
    _c)), examplesController.create);
examplesRouter.put('/:id', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
    },
    _d[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    _d)), examplesController.update);
examplesRouter.delete('/:id', celebrate_1.celebrate((_e = {},
    _e[celebrate_1.Segments.PARAMS] = {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    _e)), examplesController.delete);
exports.default = examplesRouter;
