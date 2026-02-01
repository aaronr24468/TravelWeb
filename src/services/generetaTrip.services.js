const API_ROUTE = "http://localhost:8080";

export const carList = async () => {
    const reponse = await fetch(`${API_ROUTE}/v1/travel/listCars`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        }
    })
    return reponse.json();
}

export const ListImagCity = async () => {
    const response = await fetch(`${API_ROUTE}/v1/travel/getTripImageUser`, {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        }
    });
    return response.json();
}



export const generateT = async (dataTrip) => {

    const tripResponse = await fetch(`${API_ROUTE}/v1/travel/setTrip`, {
        method: 'post',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(dataTrip)
    })
    return(tripResponse.json());
}

export const ListCity = async() =>{
    const imgCity = await fetch(`${API_ROUTE}/v1/travel/getCityImages`,{
        method:"get",
        credentials: 'include',
        headers:{
            "Content-Type": "Application/json"
        }
    })
    return(imgCity.json());  
}