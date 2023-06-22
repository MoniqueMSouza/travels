import passengersServices from "../services/passengers-services.js";

async function passengersTravels(req, res) {    

    try {
        const passengersTrav = await passengersServices.findPassengersTrav()
    
        return res.send({ passengersTrav });
      } catch (err) {
        return res.send({ err });
      }
    }





export {
    passengersTravels
}