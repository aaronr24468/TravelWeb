import { useState, useEffect, useCallback } from "react";
import image from '../../assets/perfilEmpty.jpg'
import { registerDriverData, setImageDriver } from "../../services/registerUser.services.mjs";
import { useNavigate } from "react-router";

export const useRegisterDriverHook = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({name:''});
    const [email, setEmail] = useState('')
    const [tempUrlImage, setTempUrlImage] = useState(image)
    const navigate = useNavigate();

    const getInfoDriver = async(event) =>{
        event.preventDefault();
        try {
            const data = {
                name: event.target.name.value,
                lastname: event.target.lastname.value,
                age: event.target.age.value,
                username: event.target.username.value,
                password: event.target.password.value,
                passwordC: event.target.passwordC.value,
                phone: event.target.phone.value,
                image: file.name,
                email: event.target.email.value
            }

            const result = await registerDriverData(data);
            console.log(result)
            if(!result.ok) return setError(result.message);
            const idDriver = result.idD;
            setEmail(result.message);

            setTimeout(async() =>{
                const restulImage = await setImageDriver(file, idDriver);
                
                if(!restulImage.ok) return setError(restulImage.message);

                navigate('/')
            }, 3000)

        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    const getFile = (event) =>{
        const file = event.target.files[0];
        console.log(file)
        const tempUrl = URL.createObjectURL(file)
        setTempUrlImage(tempUrl);
        setFile(file)
    }

    const verifyEmail = (event) =>{
        const email = event.target.value;
        const regexVerification = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const verify = regexVerification.test(email)
        if(!verify) return setError("Email no valido")
        setEmail(email);
    }


    return{
        loading,
        error,
        getInfoDriver,
        getFile,
        verifyEmail,
        setError,
        tempUrlImage
    }
}