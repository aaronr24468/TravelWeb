const API_URL = 'http://api.moveandgo.com.mx';

export const getReservations = async() =>{
    const data = await fetch(`${API_URL}/user/getMyReservations`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return(data.json());
}

export const cancelReservationApi = async(id) =>{
    const res = await fetch(`${API_URL}/user/cancelReservation/${id}`,{
        method: "POST",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(res.json());
} 

export const reviewDriver = async(data) =>{
    const res = await fetch(`${API_URL}/user/review/trips`,{
        method: 'post',
        credentials: 'include',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return(res.json());
}