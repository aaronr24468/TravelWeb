import { useState, useEffect, useCallback } from "react";
import { cancelReservationApi, getReservations } from "../../services/myReservations.services";

export const useMyReservationData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [refundCancel, setRefundCancel] = useState(false)

    const getMyReservations = useCallback(async () => {
        try {
            const data = await getReservations();
            if (!data.ok) return setError(data.message);
            setData(data.trips)
        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {
            setLoading(false)
            setRefundCancel(false)
        }
    }, [refundCancel])

    const cancelReservation = async(event) =>{
        try {
            const id = event.target.id;

            const res = await cancelReservationApi(id)

            if(!res.ok) setError(res.message);

            document.getElementById('dialogCancelTrip').close();

            setRefundCancel(true)
        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    useEffect(() => {
        getMyReservations();
    }, [getMyReservations])

    return {
        data,
        loading,
        error,
        setError,
        cancelReservation,
        
    }
}