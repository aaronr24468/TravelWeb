const API_URL = import.meta.env.REACT_VITE_API_URL;
//const URL_PATH = 'https://api.moveandgo.com.mx'

export const getDataProfile = async() =>{
    
    const dataProfile = await fetch(`${API_URL}/auth/getDataUser/profile`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(dataProfile.json());

}

export const setIdStripe = async(data) =>{
    
    const idStripe = await fetch(`${API_URL}/v1/travel/setIdStripe`,{
        method: "POST",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return(idStripe.json());
};

export const geMyTrips = async() =>{
    const myTrips = await fetch(`${API_URL}/driver/getDriver/travelsList`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(myTrips.json());
}

export const finishTripApi = async(id) =>{
    
    const resTripFinish = await fetch(`${API_URL}/driver/accomplisedTravel`,{
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id_Travel: id})
    })
    
    return(resTripFinish.json());
}

export const verifyDriverOnboarded = async() =>{
    const result = await fetch(`${API_URL}/stripe/verifyStripeAccount`,{
        method: "GET",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(result.json());
}

export const earningsLink = async() =>{
    const url = await fetch(`${API_URL}/stripe/earnings`,{
        method: 'GET',
        credentials: "include",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(url.json())
}

export const cancelDriverTrip = async(id_Travel) =>{
    const res = await fetch(`${API_URL}/driver/cancelTravel`,{
        method: "PUT",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id_Travel: id_Travel})
    })
    return(res.json());
}

export const getListUserReservation = async(id) =>{
    const list = await fetch(`${API_URL}/driver/list/users/reservation/${id}`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })
    
    return(list.json());
}

export const inPorgress = async(id) =>{
    const result = await fetch(`${API_URL}/driver/trip/progress/${id}`,{
        method: 'put',
        credentials: 'include',
        headers:{
            "Content-type":"application/json"
        }
    })

    return(result.json());
}
