import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { getDataTripSelected } from "../../services/tripData.mjs";


export const useTripData = () =>{
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[tripData, setTripData] = useState([]);
    const {idTrip} = useParams();

    const getData = useCallback(async() =>{
        try {
            setLoading(true);
            setError(null);
            const tripD = await getDataTripSelected(idTrip);
            setTripData(tripD.trip[0])
        } catch (error) {
            setError(error.message || "Error de servidor")
        }finally{

        }
    }, [])

    useEffect(() =>{
        getData();
    }, [getData])

    return{
        loading,
        error,
        tripData
    }
}