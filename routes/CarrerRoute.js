import { Router } from "express";
import {createCarrer, getCarrers, getCarrerById,updateCarrerById,deleteCarrerById} from "../controller/CarrerController.js";
const router = Router();

router.post('/carrer/',createCarrer);
router.get('/carrer/', getCarrers);
router.get('/carrer/:id', getCarrerById);
router.put('/carrer/:id', updateCarrerById);
router.delete('/carrer/:id', deleteCarrerById);
export default router;