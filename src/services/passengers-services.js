import passengersRepository from "../repositories/passengers-repository.js"

async function findPassengersTrav() {
    const passTrav = await passengersRepository.passengersTravs()
    return passTrav

}

export default { findPassengersTrav }

