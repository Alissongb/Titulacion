import { Router } from "express";
import {createProject,getProjectById,getProjects,updateProjectById,deleteProjectById} from "../controller/ProjectController.js";
const router = Router();
router.post('/project/',createProject);
router.get('/project/', getProjects);
router.get('/project/:id', getProjectById);
router.put('/project/:id', updateProjectById);
router.delete('/project/:id', deleteProjectById);
export default router;

