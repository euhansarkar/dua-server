"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required",
        }),
        image: zod_1.z.string({
            required_error: "image is required",
        })
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        image: zod_1.z.string().optional()
    })
});
exports.SubCategoryValidation = {
    create,
    update
};
