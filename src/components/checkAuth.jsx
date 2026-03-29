import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router"

export const CheckAuth = ({ children }) => {
    const navigate = useNavigate();
    const URL_PATH = `https://api.moveandgo.com.mx`
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false)

    const authCheck = useCallback(async () => {
        try {

            const resAuth = await fetch(`${URL_PATH}/auth/checkAccount`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => res.json())
            const data = resAuth
            console.log(data)

            if (data.ok) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }



        } catch (error) {
            setIsAuth(false)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        authCheck();
    }, [authCheck])

    if (loading) return <div>Verificando sesion...</div>

    if (!isAuth) {
        navigate('/')
        return null
    }

    return (children)
}