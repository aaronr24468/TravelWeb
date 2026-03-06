import { useState, useEffect, useCallback, useRef } from "react";
import { cancelDriverTrip, earningsLink, finishTripApi, geMyTrips, getDataProfile, getListUserReservation, setIdStripe, verifyDriverOnboarded } from "../../services/profile.services";

export const useProfileHook = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [trips, setTrips] = useState([]);
    const [reload, setReload] = useState(false);
    const [listNames, setListNames] = useState([])

    const refStripe = useRef();

    const getData = useCallback(async () => {
        try {

            setLoading(true);
            setError(null);
            const userInfo = await getDataProfile();

            if (!userInfo.ok) return setError(userInfo.message);

            if(userInfo.data.stripe_onboarded === 0){
                const onboard = await verifyDriverOnboarded();
                console.log(onboard)
                onboard.message === "Cuenta activada"? setReload(true):'';
            }

            setData(userInfo.data);


            if(userInfo.data.rol != "user"){
                const listTrips = await geMyTrips();
                setTrips(listTrips.list)
            }

        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {
            setLoading(false)
        }
    }, [reload])


    const finishTrip = async(event) =>{
        try {
            const doomBtn = event.target;
            const id = doomBtn.id;
            
            const resDB = await finishTripApi(id);
         
            if(!resDB.ok) return setError(resDB.message);

            setError(resDB.message)
        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    const cancelTrip = async(event) =>{
        try {
            const domBtn = event.target;
            const id = domBtn.id;
            const res = await cancelDriverTrip(id)
            console.log(res)
        } catch (error){
            setError(error.message || "Error de servidor");
        }
    }

    const getEarnings = async() =>{
        try {
            const urlLink = await earningsLink();
            window.location.href = urlLink.url;
        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    const getUsersListTravel = async(event) =>{
        const listBox = document.getElementById('InfoListUser');
        const idTravel =  event.target.id;
        if(listBox.style.display === "") listBox.style.display = "flex";

        try {
            const list = await getListUserReservation(idTravel)
            setListNames(list.list)
        } catch (error) {
            if(listBox.style.display === "") listBox.style.display = "none";
            setError(error.message || "Error de servidor")
        }
        
    }

    useEffect(() => {
        getData();
    }, [getData])

    return {
        data,
        trips,
        loading,
        error,
        setError,
        refStripe,
        finishTrip,
        getEarnings,
        cancelTrip,
        getUsersListTravel,
        listNames
    }
}