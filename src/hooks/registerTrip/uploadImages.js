import { saveImageCity } from "../../services/generetaTrip.services"
import { useState, useRef } from "react"


export const useUploadImage = () => {
    const [city, setCity] = useState(null);
    const [city2, setCity2] = useState(null);

    const [TImageO, setTImageO] = useState({ //este hook guardamos la imagen que selecciono el usuario de lado izquierdo
        img: null,
        dataImage: null
    })
    const [TImageD, setTImageD] = useState({ //este hook guardamos la imagen que selecciono el usuario de lado derecho
        img: null,
        dataImage: null
    })

    const tripImageOrigin = (event) => { //metodo de onchange para el input
        const fileData = event.target.files[0]; //guardamos el file del input en fileData
        const temporalUrl = URL.createObjectURL(fileData) //creamos un URL temporal para mostrar la imagen que eligio el usuario
        setTImageO({ //
            img: temporalUrl, //guardamos el url temporal aqui
            dataImage: fileData //guardamos el file del input aqui
        })
    }

    const tripImageDestination = (event) => { //metodo de onchange para el input
        const fileData = event.target.files[0]; //guardamos el file del input en fileData
        const temporalUrl = URL.createObjectURL(fileData) //creamos un URL temporal para mostrar la imagen que eligio el usuario
        setTImageD({
            img: temporalUrl, //guardamos el url temporal aqui
            dataImage: fileData //guardamos el file del input aqui
        })
    }

    const saveImage = async (event) => { //creamos este metodo el cual mandaremos en el return para tener acceso a el mediante customeHooks y accionarlo con el boton
        try {
            const clase = event.target.className
            const res = await saveImageCity(clase, TImageO, TImageD, city, city2)
        } catch (error) {

        }
    }

    return {
        tripImageOrigin,
        tripImageDestination,
        saveImage,
        TImageO,
        TImageD,
        setCity,
        setCity2
    }
}