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

export const saveImageCity = async (clase, TImageO, TImageD, city, city2) => {
    try {
        if (clase === "saveOriginImage") {
            const cityD = city
            if (cityD.length != 0 && TImageO != null) {
                const formData = new FormData();
                formData.append('image', TImageO.dataImage);
                const response = await fetch(`${API_ROUTE}/v1/travel/uploadTripImage/${cityD}`, {
                    method: 'post',
                    credentials: 'include',
                    body: formData
                }).then((res) => res.json());
                console.log(response.message)
                response.message === "Success" ? "" : "";
            }
        } else {
            const cityD = city2
            if (cityD.length != 0 && TImageD != null) {
                const formData = new FormData();
                formData.append('image', TImageD.dataImage);
                const response = await fetch(`${API_ROUTE}/v1/travel/uploadTripImage/${cityD}`, {
                    method: 'post',
                    credentials: 'include',
                    body: formData
                }).then((res) => res.json());
                response.message === "Success" ? "" : "";
            }
        }
    } catch (error) {

    }

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