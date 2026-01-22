const API_URL = 'http://localhost:8080';

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
    const res = await fetch(`${API_URL}/v1/travel/checkAccount`,{
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "Application/json"
        }
    });

    return(res.json());
}