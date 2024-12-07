import { Category, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { ICategoryFilterRequest } from "./category.interface";
import { categoryRelationalFields, categoryRelationalFieldsMapper, categorySearchableFields } from "./category.constant";
import { SearchingFilteringHelper } from "../../../helpers/searchFilterHelper";

const createOne = async (data: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data
    })
    return result;
}

const getAll = async (
    filters: ICategoryFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<Category[]>> => {
    const { page, limit, skip } = paginationHelpers.calculatePagination(options);


    const andConditions = SearchingFilteringHelper.searchingFiltering({ filters, searchAbleFields: categorySearchableFields, relationalFields: categoryRelationalFields, relationalFieldsMapper: categoryRelationalFieldsMapper });


    const whereConditions: Prisma.CategoryWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.category.findMany({
        skip,
        take: limit,
        where: whereConditions,
        include: {
            subCategories: true,
            duas: true
        }
    });
    const total = await prisma.category.count({
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

const getOne = async (id: number): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
      where: {
        id,
      },
      include: {
          subCategories: true,
          duas: true
      },
    });
    return result;
};

const updateOne = async (id: number, payload: Partial<Category>): Promise<Category> => {
    const result = await prisma.category.update({
        where: {
            id
        },
        data: payload
    });
    return result;
};

const deleteOne = async (id: number): Promise<Category> => {
    const result = await prisma.category.delete({
        where: {
            id
        }
    });
    return result;
};

export const CategoryService = { createOne, updateOne, deleteOne, getAll, getOne }
