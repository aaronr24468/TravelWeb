import { useCallback, useEffect, useRef, useState } from "react"
import selectUser from '../../assets/selectPhotoU.svg'
import { registerUserData, uploadImageUser } from "../../services/registerUser.services.mjs";
import { useNavigate } from "react-router";

export const useRegisterUser = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [tempURL, setTempUrl] = useState(selectUser);
    const [file, setFile] = useState([])
    const [flag, setFlag] = useState(false)

    const photoRef = useRef();
    const form = useRef();

    const registerUser = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            setError(null)
            const data = {
                name: event.target.name.value,
                lastname: event.target.lastname.value,
                age: event.target.age.value,
                username: event.target.username.value,
                password: event.target.password.value,
                phone: event.target.phone.value,
                image: ''
            }

            const response = await registerUserData(data);
            const id = response.id;

            if (response.ok && flag) {
                setTimeout(async () => {
                    const response = await uploadImageUser(file, id);
                    response.ok ? (navigate('/')) : (console.alert('No se pudo subir imagen'));
                }, 100);
            } else if (response.ok === true) {
                alert('Se realizo el registro con exito sin imagen')
                navigate('/')
            } else if (!response.ok) {
                alert('El username que quiere registrar, ya esta registrado')
            }

        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {
            setFlag(false)
            setLoading(false);
            setFile([])
        }
    };

    const getImage = () => {
        const fileUser = photoRef.current.files[0]
        const url = URL.createObjectURL(fileUser)
        setTempUrl(url);
        setFile(fileUser)
        setFlag(true)
    }


    return {
        loading,
        error,
        registerUser,
        getImage,
        photoRef,
        tempURL,
        form
    }
}