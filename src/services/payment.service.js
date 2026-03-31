const API_URL = import.meta.env.REACT_VITE_API_URL;
//const API_URL = 'https://api.moveandgo.com.mx';

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