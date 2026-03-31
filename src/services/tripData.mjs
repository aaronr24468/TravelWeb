//const API_URL = import.meta.env.REACT_VITE_API_URL;
const API_URL = 'https://api.moveandgo.com.mx';

export const getDataTripSelected = async(id) =>{
    const trip = await fetch(`${API_URL}/trip/getTrip/information/${id}`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return trip.json();
}

export const getReviewsList = async(idTrip) =>{
    const reviews = await fetch(`${API_URL}/trip/getReviews/${idTrip}`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            'Content-Type':'application/json'
        }
    })
    return(reviews.json());
}