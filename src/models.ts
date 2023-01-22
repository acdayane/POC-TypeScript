import joi from "joi";

export const taskSchema = joi.object({
    responsable: joi.string().min(3).max(50).regex(/^[a-zA-Z]+$/ ).required(),
    description: joi.string().min(3).max(100).required()
});