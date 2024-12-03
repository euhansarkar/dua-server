import { SubCategory, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { ISubCategoryFilterRequest } from './subCategory.interface';
import {
  SubCategoryRelationalFields,
  SubCategoryRelationalFieldsMapper,
  SubCategorySearchableFields,
} from './subCategory.constant';
import { SearchingFilteringHelper } from "../../../helpers/searchFilterHelper";

const createOne = async (data: SubCategory): Promise<SubCategory> => {
    const result = await prisma.subCategory.create({
      data,
    });
    return result;
}

const getAll = async (
    filters: ISubCategoryFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<SubCategory[]>> => {
    const { page, limit, skip } = paginationHelpers.calculatePagination(options);


    const andConditions = SearchingFilteringHelper.searchingFiltering({ filters, searchAbleFields: SubCategorySearchableFields, relationalFields: SubCategoryRelationalFields, relationalFieldsMapper: SubCategoryRelationalFieldsMapper });


    const whereConditions: Prisma.SubCategoryWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.subCategory.findMany({
      skip,
      take: limit,
      where: whereConditions,
    });
    const total = await prisma.subCategory.count({
      where: whereConditions,
    });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
}

const getOne = async (id: number): Promise<SubCategory | null> => {
    const result = await prisma.subCategory.findUnique({
      where: {
        id,
      },
    });
    return result;
};

const updateOne = async (id: number, payload: Partial<SubCategory>): Promise<SubCategory> => {
    const result = await prisma.subCategory.update({
      where: {
        id,
      },
      data: payload,
    });
    return result;
};

const deleteOne = async (id: number): Promise<SubCategory> => {
    const result = await prisma.subCategory.delete({
        where: {
            id
        }
    });
    return result;
};

export const SubCategoryService = { createOne, updateOne, deleteOne, getAll, getOne }
