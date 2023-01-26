import { Router } from "express";
import {createContribution,deleteContribution,getContributionById,getContributions,updateContribution} from '../controller/ContributionController.js';

const router = Router();
router.get('/contributions/', getContributions);
router.get('/contributions/:id', getContributionById);
router.post('/contributions/', createContribution);
router.delete('/contributions/:id', deleteContribution);
router.put('/contributions/:id', updateContribution);
export default router;