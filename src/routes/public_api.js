import express from "express";
import userController from "../controllers/UserController.js";

const publicRouter = new express.Router();
publicRouter.post('/api/users', userController.register)


export {
    publicRouter
}