"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuaService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const dua_constant_1 = require("./dua.constant");
const searchFilterHelper_1 = require("../../../helpers/searchFilterHelper");
const createOne = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.dua.create({
        data
    });
    return result;
});
const getAll = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const andConditions = searchFilterHelper_1.SearchingFilteringHelper.searchingFiltering({ filters, searchAbleFields: dua_constant_1.DuaSearchableFields, relationalFields: dua_constant_1.DuaRelationalFields, relationalFieldsMapper: dua_constant_1.DuaRelationalFieldsMapper });
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.dua.findMany({
        skip,
        take: limit,
        where: whereConditions,
    });
    const total = yield prisma_1.default.dua.count({
        where: whereConditions
    });
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.dua.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateOne = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.dua.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.dua.delete({
        where: {
            id
        }
    });
    return result;
});
exports.DuaService = { createOne, updateOne, deleteOne, getAll, getOne };
