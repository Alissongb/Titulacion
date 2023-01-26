import { Router } from "express";
import {createStateContribution,deleteStateContributionById,getStateContributions,getStateContributionById,updateStateContributionById} from "../controller/StateContributionController";
const router = Router();

router.post('stateCon/',createStateContribution);
router.get('stateCon/',getStateContributions);
router.get('stateCon/:id',getStateContributionById);
router.put('stateCon/:id',updateStateContributionById);
router.delete('stateCon/:id',deleteStateContributionById);
export default router;
