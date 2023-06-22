import connection from "../database/database.js"

async function passengersTravs (){
    await connection.query(
        `
        select p."fullName", COUNT(p) as "viagens"  from passengers as p
        JOIN passenger_travels ON passenger_travels."passengerId" = p.id
        JOIN travels ON travels.id = passenger_travels."travelId"
        WHERE p."fullName" like '%Brooke%'
        GROUP BY p."fullName" 
        ORDER BY "viagens" desc
            `

      );
    }

export default {
    passengersTravs
}