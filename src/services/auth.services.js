//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = 'https://api.moveandgo.com.mx';

export const loginRequest = async (data) => {
    console.log(data)
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => res.json())
    return(res);
}

export const checkAccountRequest = async() =>{
    const res = await fetch(`${API_URL}/auth/checkAccount`,{
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        }
    });

    return(res.json());
}