import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { DuaService } from "./dua.service";
import { DuaFilterableFields } from "./dua.constant";

const createOne = catchAsync(async (req, res) => {
    const result = await DuaService.createOne(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "dua created successfully!",
        data: result
    })
})

const getAll = catchAsync(async (req: Request, res: Response) => {

    const filters = pick(req.query, DuaFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await DuaService.getAll(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "dua fetched successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DuaService.getOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'dua fetched successfully',
        data: result
    });
});

const updateOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DuaService.updateOne(Number(id), req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'dua updated successfully',
        data: result
    });
});

const deleteOne = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DuaService.deleteOne(Number(id));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'dua delete successfully',
        data: result
    });
});


export const DuaController = {
    createOne, updateOne, deleteOne, getAll, getOne
}