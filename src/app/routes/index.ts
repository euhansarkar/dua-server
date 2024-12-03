import express from 'express';
import { CategoryRouter } from '../modules/category/category.router';
import { DuaRouter } from '../modules/dua/dua.router';
import { SubCategoryRouter } from '../modules/subCategory/subCategory.router';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRouter,
  },
  {
    path: '/sub-categories',
    route: SubCategoryRouter,
  },
  {
    path: '/duas',
    route: DuaRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
