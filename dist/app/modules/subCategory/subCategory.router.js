"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const subCategory_controller_1 = require("./subCategory.controller");
const subCategory_validation_1 = require("./subCategory.validation");
const router = express_1.default.Router();
router
    .route(`/`)
    .post((0, validateRequest_1.default)(subCategory_validation_1.SubCategoryValidation.create), subCategory_controller_1.SubCategoryController.createOne)
    .get(subCategory_controller_1.SubCategoryController.getAll);
router
    .route(`/:id`)
    .get(subCategory_controller_1.SubCategoryController.getOne)
    .patch((0, validateRequest_1.default)(subCategory_validation_1.SubCategoryValidation.update), subCategory_controller_1.SubCategoryController.updateOne)
    .delete(subCategory_controller_1.SubCategoryController.deleteOne);
exports.SubCategoryRouter = router;
