const API_ROUTE = "https://api.moveandgo.com.mx";

export const carList = async () => {
    const reponse = await fetch(`${API_ROUTE}/driver/listCars`, {
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

    const tripResponse = await fetch(`${API_ROUTE}/driver/setTrip`, {
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
    const imgCity = await fetch(`${API_ROUTE}/driver/getCityImages`,{
        method:"get",
        credentials: 'include',
        headers:{
            "Content-Type": "Application/json"
        }
    })
    return(imgCity.json());  
}

export const registerCar = async(data) =>{
    const resRegisterCar = await fetch(`${API_ROUTE}/driver/register/Vehicle`,{
        method: 'POST',
        credentials: 'include',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    return(resRegisterCar.json());
}

export const uploadCarImage = async(formData, id) =>{
    const resUploadImage = await fetch(`${API_ROUTE}/driver/uploadImageCar/${id}`,{
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return(resUploadImage.json())
}

export const checkRoll = async() =>{
    const result = await fetch(`${API_ROUTE}/auth/verifyRol`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    })

    return(result.json());
}