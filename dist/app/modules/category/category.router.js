"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
router
    .route(`/`)
    .post((0, validateRequest_1.default)(category_validation_1.CategoryValidation.create), category_controller_1.CategoryController.createOne)
    .get(category_controller_1.CategoryController.getAll);
router
    .route(`/:id`)
    .get(category_controller_1.CategoryController.getOne)
    .patch((0, validateRequest_1.default)(category_validation_1.CategoryValidation.update), category_controller_1.CategoryController.updateOne)
    .delete(category_controller_1.CategoryController.deleteOne);
exports.CategoryRouter = router;
