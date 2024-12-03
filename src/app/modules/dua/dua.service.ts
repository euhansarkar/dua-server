import { Dua, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { IDuaFilterRequest } from "./dua.interface";
import { DuaRelationalFields, DuaRelationalFieldsMapper, DuaSearchableFields } from "./dua.constant";
import { SearchingFilteringHelper } from "../../../helpers/searchFilterHelper";

const createOne = async (data: Dua): Promise<Dua> => {
    const result = await prisma.dua.create({
        data
    })
    return result;
}

const getAll = async (
    filters: IDuaFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<Dua[]>> => {
    const { page, limit, skip } = paginationHelpers.calculatePagination(options);


    const andConditions = SearchingFilteringHelper.searchingFiltering({ filters, searchAbleFields: DuaSearchableFields, relationalFields: DuaRelationalFields, relationalFieldsMapper: DuaRelationalFieldsMapper });


    const whereConditions: Prisma.DuaWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.dua.findMany({
        skip,
        take: limit,
        where: whereConditions,
    });
    const total = await prisma.dua.count({
        where: whereConditions
    })

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
}

const getOne = async (id: number): Promise<Dua | null> => {
    const result = await prisma.dua.findUnique({
        where: {
            id
        }
    });
    return result;
};

const updateOne = async (id: number, payload: Partial<Dua>): Promise<Dua> => {
    const result = await prisma.dua.update({
        where: {
            id
        },
        data: payload
    });
    return result;
};

const deleteOne = async (id: number): Promise<Dua> => {
    const result = await prisma.dua.delete({
        where: {
            id
        }
    });
    return result;
};

export const DuaService = { createOne, updateOne, deleteOne, getAll, getOne }
