import express from 'express';
import { registerController, loginController } from '../controller/userController.js';

const UserRouter = express.Router();

UserRouter.post("/register", registerController)

UserRouter.post("/login", loginController)

export default UserRouter;