import { Router } from "express";
import{ createRole, getRoles,getRoleById, deleteRoleById, updateRoleById  } from "../controller/RoleController.js";
const router = Router();
router.post('/role',createRole);
router.get('/role',getRoles);
router.get('/role/:id',getRoleById);
router.delete('/role/:id',deleteRoleById);
router.put('/role/:id', updateRoleById );
export default router;
