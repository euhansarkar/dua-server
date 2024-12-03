import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.service";
import { categoryFilterableFields } from "./category.constant";

const createOne = catchAsync(async (req, res) => {
    const result = await CategoryService.createOne(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Category created successfully!",
        data: result
    })
})

const getAll = catchAsync(async (req: Request, res: Response) => {

    const filters = pick(req.query, categoryFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await CategoryService.getAll(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Category fetched successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CategoryService.getOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category fetched successfully',
        data: result
    });
});

const updateOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CategoryService.updateOne(Number(id), req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category updated successfully',
        data: result
    });
});

const deleteOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CategoryService.deleteOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category delete successfully',
        data: result
    });
});


export const CategoryController = {
    createOne, updateOne, deleteOne, getAll, getOne
}