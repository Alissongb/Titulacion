import { Router } from "express";
import {createDescriptionRole,deleteDescriptionRoleById,getDescriptionRoleById,getDescriptionRoleByIdRole,getDescriptionRoleByIdUser,getDescriptionRoles,updateDescriptionRoleById} from "../controller/DescriptionRoleController.js";
const router = Router();
router.post('/descriptionRole/',createDescriptionRole);
router.get('/descriptionRole/', getDescriptionRoles);
router.get('/descriptionRole/:id', getDescriptionRoleById);
router.get('/descriptionRole/id_user/:id_user', getDescriptionRoleByIdUser);
router.get('/descriptionRole/id_role/:id_role', getDescriptionRoleByIdRole);
router.put('/descriptionRole/:id', updateDescriptionRoleById);
router.delete('/descriptionRole/:id', deleteDescriptionRoleById);

export default router;
