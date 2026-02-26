import { useState, useCallback, useEffect } from "react";
import { carList, checkRoll, generateT, ListCity, ListImagCity, registerCar, uploadCarImage } from "../../services/generetaTrip.services";
import carSelect from '../../assets/RegisterCarSelected.svg'
import { useNavigate } from "react-router";

export const useGenerateTripData = () => {
    const navigate = useNavigate();
    const [login, setLoading] = useState(false);
    const [error, setError] = useState(null)
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

    const [tempUrl, setTempUrl] = useState(carSelect)
    const [fileCar, setFileCar] = useState(null)
    const [reloadList, setRealoadList] = useState(false);


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
                destination_point: form.arrivedPoint.value,
                arrived_point: form.arrivedPoint.value,
                departure_time: form.departureTime.value,
                arrived_time: form.ArrivedTime.value,
                city_image: cityPhoto
            }
            console.log(dataTrip)
            const res = await generateT(dataTrip)
            
            if(!res.ok) return setError(res.message)

            navigate('/move&go')
        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {
            setLoading(false)
        }

    }

    const getAllInfo = useCallback(async () => {
        try {

            setLoading(true);
            setError(null);

            const [listCars, listCity] = await Promise.all([carList(), ListCity()])
            if (listCars.ok) setCars(listCars.cars);
            if (listCity.ok) setCityList(listCity.cityImages)

        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {
            setLoading(false);
        }
    }, [reloadList])

    const getDataCar = async (event) => {
        event.preventDefault();
        try {
            const data = {
                brand: event.target.brand.value,
                model: event.target.model.value,
                color: event.target.color.value,
                plates: event.target.plates.value,
                insured: event.target.insured.checked,
                year: event.target.year.value,
                seats: event.target.seats.value
            }
            const res = await registerCar(data);

            if (!res.ok) return setError(res.message);

            const id = res.id

            setTimeout(async () => {
                const formData = new FormData();
                formData.append('image', fileCar)
                const res = await uploadCarImage(formData, id);

                if (!res.ok) return setError(res.message);

                setError(res.message)
                setRealoadList(true)
                document.getElementById('vehicleRegister').close()
            }, 100)
        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    const getPhotoCar = (event) => { //se ejecuta cuando el input fiel cambia y se obtiene el file
        const file = event.target.files[0];
        const tempUrl = URL.createObjectURL(file)
        setTempUrl(tempUrl)
        setFileCar(file)
    }

    const authenticatedRoll = async() =>{
        try {
            const rollC = await checkRoll();
            console.log(rollC)
            rollC.driver? '':navigate("/move&go")
        } catch (error) {
            setError(error.message || 'Error de servidor')
        }
    }


    useEffect(() => {
        authenticatedRoll();
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
        cityPhoto,
        getDataCar,
        getPhotoCar,
        tempUrl
    };
}