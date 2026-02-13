const API_URL = 'http://localhost:8080';

export const getReservations = async() =>{
    const data = await fetch(`${API_URL}/v1/travel/getMyReservations`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return(data.json());
}

export const cancelReservationApi = async(id) =>{
    const res = await fetch(`${API_URL}/v1/travel/cancelReservation/${id}`,{
        method: "POST",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(res.json());
} 