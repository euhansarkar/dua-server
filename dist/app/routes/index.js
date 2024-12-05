"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_router_1 = require("../modules/category/category.router");
const dua_router_1 = require("../modules/dua/dua.router");
const subCategory_router_1 = require("../modules/subCategory/subCategory.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/categories',
        route: category_router_1.CategoryRouter,
    },
    {
        path: '/sub-categories',
        route: subCategory_router_1.SubCategoryRouter,
    },
    {
        path: '/duas',
        route: dua_router_1.DuaRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
