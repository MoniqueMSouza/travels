import { Router } from 'express';
import { passengersTravels } from '../controllers/passengers-controllers.js'

const passengersrouter = Router();

passengersrouter.get('/passengers/travels', passengersTravels)


export default passengersrouter;