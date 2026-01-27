const API_URL = 'http://localhost:8080';

export const getDataTripSelected = async(id) =>{
    const trip = await fetch(`${API_URL}/v1/travel/getTrip/information/${id}`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return trip.json();
}