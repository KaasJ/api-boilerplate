import { RequestHandler } from 'express'

export const sayHi: RequestHandler = (req, res, next) => {
    res.json({ message: 'Hi'})
};