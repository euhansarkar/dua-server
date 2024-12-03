import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';
const router = express.Router();


router
    .route(`/`)
    .post(
        validateRequest(CategoryValidation.create),
        CategoryController.createOne
    )
    .get(CategoryController.getAll);

router
    .route(`/:id`)
    .get(CategoryController.getOne)
    .patch(
        validateRequest(CategoryValidation.update),
        CategoryController.updateOne)
    .delete(CategoryController.deleteOne);

export const CategoryRouter = router;