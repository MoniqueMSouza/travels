import { Router } from 'express';
import passengersRouter from './passengers-routes.js'
import httpStatus from "http-status";

const router = Router();

router.get("/health", (req, res) => res.sendStatus(httpStatus.OK));
router.use(passengersRouter);


export default router;