import joi from 'joi';

export const userSchema = {
    body: {
        first_name: joi.string().required(),
        second_name: joi.string().required()
    }
};