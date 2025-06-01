import * as Joi from "joi";


export const JoiValidationSchema = Joi.object({
    NODE_ENV: Joi.string().default("dev"),
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3000),
});