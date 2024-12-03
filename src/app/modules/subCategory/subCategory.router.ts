import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SubCategoryController } from './subCategory.controller';
import { SubCategoryValidation } from './subCategory.validation';
const router = express.Router();


router
    .route(`/`)
    .post(
        validateRequest(SubCategoryValidation.create),
        SubCategoryController.createOne
    )
    .get(SubCategoryController.getAll);

router
    .route(`/:id`)
    .get(SubCategoryController.getOne)
    .patch(
        validateRequest(SubCategoryValidation.update),
        SubCategoryController.updateOne)
    .delete(SubCategoryController.deleteOne);

export const SubCategoryRouter = router;