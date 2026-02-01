const API_URL = 'http://localhost:8080';

export const setPaymentIntent = async(data) =>{
    const response = await fetch(`${API_URL}/v1/travel/payment_Intent`,{
        method: 'POST',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return(response.json());
}