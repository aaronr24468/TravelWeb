import { useState, useCallback, useEffect } from "react";
import { carList, ListImagCity } from "../services/generetaTrip.services";

export const useGenerateTripData = () => {
    const [cars, setCars] = useState([]);
    const [cityImages, setCityImages] = useState([]);
    const [origen, setOrigen] = useState('') //obtenemos el texto de la ciudad de orgen
    const [destination, setDestination] = useState('') //obtenemos el texto de la ciudad de destino

    const [imgSelected, setImageSelected] = useState({
        originImg: null,
        destinationImg: null
    })

    const [selectCar, setSelectCar] = useState({
        vehicle_id: '',
        select: "Seleccione Vehiculo",
        model: '',
        img: null,
        placas: '',
        color: '',
        seats: 0,
        start_point: '',
    });

    

    const loadCars = useCallback(async () => {
        try {
            const list = await carList();
            setCars(list);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const loadCityImages = useCallback(async () => {
        try {
            const imgData = await ListImagCity();
            setCityImages(imgData.listImg);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const getInfoTrip = async(event) => {
        event.preventDefault();
        const form = event.target;

        const dataTrip = {
            vehicle_id: selectCar.vehicle_id,
            origin_city: origen,
            destination_city: destination,
            departure_date: form.departure_date.value,
            available_seats: selectCar.seats,
            price: form.price.value,
            starting_point: form.collectPoint.value,
            image_origin: imgSelected.originImg,
            image_destination: imgSelected.destinationImg
        }
        console.log(dataTrip)
        const tripResponse = await fetch('http://localhost:8080/v1/travel/setTrip',{
            method: 'post',
            credentials: 'include',
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(dataTrip)
        }).then((res) => res.json())

        console.log(tripResponse)

    }

    

    useEffect(() => {
        loadCars();
        loadCityImages();
    }, [loadCars, loadCityImages]);


    return {
        cars,
        cityImages,
        setImageSelected,
        setSelectCar,
        getInfoTrip,
        imgSelected,
        setOrigen,
        setDestination,
        origen,
        destination,
        selectCar
    };
}