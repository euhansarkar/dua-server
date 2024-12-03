import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { SubCategoryService } from './subCategory.service';
import { SubCategoryFilterableFields } from './subCategory.constant';

const createOne = catchAsync(async (req, res) => {
    const result = await SubCategoryService.createOne(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "SubCategory created successfully!",
        data: result
    })
})

const getAll = catchAsync(async (req: Request, res: Response) => {

    const filters = pick(req.query, SubCategoryFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await SubCategoryService.getAll(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "SubCategory fetched successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SubCategoryService.getOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SubCategory fetched successfully',
        data: result
    });
});

const updateOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SubCategoryService.updateOne(Number(id), req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SubCategory updated successfully',
        data: result
    });
});

const deleteOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SubCategoryService.deleteOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SubCategory delete successfully',
        data: result
    });
});


export const SubCategoryController = {
    createOne, updateOne, deleteOne, getAll, getOne
}