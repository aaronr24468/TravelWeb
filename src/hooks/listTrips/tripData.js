import { useEffect, useState, useCallback } from "react";
import { getList } from "../../services/tripList.services";
import { useNavigate } from "react-router";

export const useTripList = () =>{
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const loadTrips = useCallback(async()=>{
        try {
            setLoading(true);
            setError(null);

            const listTravel = await getList();

            if(!listTravel.ok){
                setError(listTravel.message)
                return;
            }
            
            setData(listTravel.list)
        } catch (error) {
            setError(error.message || "Error al obtener la informacion")
        }finally{
            setLoading(false)
        }
    },[])

    useEffect(() =>{
        loadTrips();
    }, [loadTrips])

    return{data, error, loading, navigate}
}