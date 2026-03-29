const API_URL = 'http://api.moveandgo.com.mx';

export const setPaymentIntent = async(data) =>{
    const response = await fetch(`${API_URL}/stripe/payment_Intent`,{
        method: 'POST',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    return(response.json());
}