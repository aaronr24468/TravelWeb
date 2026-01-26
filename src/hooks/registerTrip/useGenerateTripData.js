import { useState, useCallback, useEffect } from "react";
import { carList, generateT, ListCity, ListImagCity } from "../../services/generetaTrip.services";

export const useGenerateTripData = () => {
    const[login, setLoading] = useState(false);
    const[error, setError] = useState(null)
    const [cars, setCars] = useState([]);
    const [cityImages, setCityImages] = useState([]); //Lista de imagenes de las ciudades a viajar
    const [origen, setOrigen] = useState('') //obtenemos el texto de la ciudad de orgen
    const [destination, setDestination] = useState('') //obtenemos el texto de la ciudad de destino

    const [imgSelected, setImageSelected] = useState({
        originImg: null,
        destinationImg: null
    })
    const [cityList, setCityList] = useState([])
    const [cityPhoto, setCityPhoto] = useState(null)
    

    const [selectCar, setSelectCar] = useState({ //
        vehicle_id: '',
        select: "Seleccione Vehiculo",
        model: '',
        img: null,
        placas: '',
        color: '',
        seats: 0,
        start_point: '',
    });

    const getInfoTrip = async (event) => {
        event.preventDefault();
        const form = event.target;
        try {

            setLoading(true);
            setError(null);

            const dataTrip = {
                vehicle_id: selectCar.vehicle_id,
                origin_city: origen,
                destination_city: destination,
                departure_date: form.departure_date.value,
                available_seats: selectCar.seats,
                price: form.price.value,
                starting_point: form.collectPoint.value,
                image_origin: imgSelected.originImg,
                image_destination: imgSelected.destinationImg,
                city_image: cityPhoto
            }
            console.log(dataTrip)
            const res = await generateT(dataTrip)
            console.log(res)

        } catch (error) {
            setError()
        } finally {
            setLoading(false)
        }

    }

    const getAllInfo = useCallback(async() =>{
        try {

            setLoading(true);
            setError(null);
            
            const [listCars, listMaps, listCity] = await Promise.all([carList(), ListImagCity(), ListCity()])
            if(listCars.ok) setCars(listCars.message);
            if(listMaps.ok) setCityImages(listMaps.listImg);
            if(listCity.ok) setCityList(listCity.cityImages)

        } catch (error) {
            setError(error.message || "Error de servidor")
        }finally{
            setLoading(false);
        }
    },[])



    useEffect(() => {
        getAllInfo();
    }, [getAllInfo]);

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
        selectCar,
        cityList,
        setCityPhoto,
        cityPhoto
    };
}