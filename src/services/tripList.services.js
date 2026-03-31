//const API_URL = import.meta.env.REACT_VITE_API_URL;
const API_URL = 'https://api.moveandgo.com.mx';

export const getList = async() =>{
    const res = await fetch(`${API_URL}/trip/getListTravel`,{
        method: 'GET',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    });
    return(res.json());
}