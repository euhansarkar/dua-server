import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DuaController } from './dua.controller';
import { DuaValidation } from './dua.validation';
const router = express.Router();


router
    .route(`/`)
    .post(
        validateRequest(DuaValidation.create),
        DuaController.createOne
    )
    .get(DuaController.getAll);

router
    .route(`/:id`)
    .get(DuaController.getOne)
    .patch(
        validateRequest(DuaValidation.update),
        DuaController.updateOne)
    .delete(DuaController.deleteOne);

export const DuaRouter = router;