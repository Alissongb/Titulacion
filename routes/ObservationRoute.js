import { Router } from "express";
import {UpdateObservationById,createObservation,deleteObservationById,getObservationById,getObservations}from "../controller/ObservationController.js";
const router = Router();
router.get('/observations/', getObservations);
router.get('/observations/:id', getObservationById);
router.post('/observations/', createObservation);
router.delete('/observations/:id', deleteObservationById);
router.put('/observations/:id', UpdateObservationById);
export default router;
