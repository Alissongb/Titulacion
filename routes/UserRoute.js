import { Router } from "express";
import {getUsers, getUserById, UpdateUserById, deleteLogicUserById} from '../controller/UsersController.js';
import {verifyToken,verifyRole} from '../middleware/middleware.js';
const router = Router();
router.get('/users',verifyRole,verifyToken,getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', UpdateUserById);
router.delete('/users/:id', deleteLogicUserById);

export default router;
