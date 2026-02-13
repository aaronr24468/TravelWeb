import { useEffect, useState, useCallback, useRef } from "react";
import { getDataTripSelected } from "../../services/tripData.mjs";
import { useParams, useNavigate } from "react-router";
import { setPaymentIntent } from "../../services/payment.service";

export const useTripReservation = () =>{
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[infoTrip, setInfoTrip] = useState([]);
    const[amount, setAmount] = useState(0);
    const[clientSecretData, setClientSecretData] = useState('')
    const amountSeat = useRef();

    const navigate = useNavigate();
    const {id} = useParams();

    const getInfoTrip = useCallback(async() =>{
        try {
            setLoading(true);
            setError(null);
            const data = await getDataTripSelected(id);
            
            if(!data.ok) return setError(data.message);

            setInfoTrip(data.trip[0])
            setAmount(data.trip[0].price)
            
        } catch (error) {
            setError(error.message || 'Error de servidor')
        }finally{
            setLoading(false)
        }
    }, []);

    const paymentIntent = async(event) =>{
        event.preventDefault();
        
        const form = event.target
        const seatsAmount = document.querySelector('.numberSeats').innerText;
        try {
            const data = {
                tripId: infoTrip.id,
                driver_id: infoTrip.driver_id,
                seats: Number(seatsAmount),
                policies: form.acceptPolicies.checked,
                amount: amount,
            }
            const response = await setPaymentIntent(data);
           
            if(response.ok === false) return setError(response.message)

            setClientSecretData(response.clientSecret)

        } catch (error) {
            setError(error.message || "Error de servidor")
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        getInfoTrip();
    }, [getInfoTrip])

    return{
        loading, 
        error, 
        infoTrip,
        navigate,
        paymentIntent,
        amountSeat,
        clientSecretData,
        setError
    }
}