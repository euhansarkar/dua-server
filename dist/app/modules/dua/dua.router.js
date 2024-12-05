"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuaRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const dua_controller_1 = require("./dua.controller");
const dua_validation_1 = require("./dua.validation");
const router = express_1.default.Router();
router
    .route(`/`)
    .post((0, validateRequest_1.default)(dua_validation_1.DuaValidation.create), dua_controller_1.DuaController.createOne)
    .get(dua_controller_1.DuaController.getAll);
router
    .route(`/:id`)
    .get(dua_controller_1.DuaController.getOne)
    .patch((0, validateRequest_1.default)(dua_validation_1.DuaValidation.update), dua_controller_1.DuaController.updateOne)
    .delete(dua_controller_1.DuaController.deleteOne);
exports.DuaRouter = router;
