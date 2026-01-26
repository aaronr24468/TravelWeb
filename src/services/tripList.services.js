const API_URL = 'http://localhost:8080';

export const getList = async() =>{
    const res = await fetch(`${API_URL}/v1/travel/getListTravel`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    });
    return(res.json());
}