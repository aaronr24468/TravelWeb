
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { loginRequest, checkAccountRequest } from "../../services/auth.services"; //importamos los servicios HTTP

export const useAuth = () =>{
    const navigate = useNavigate();
    const[loading, setLoading] =  useState(false);
    const[error, setError] = useState(null);

    const login = async(data) =>{
        try {
            setLoading(true);
            setError(null)
            
            const response = await loginRequest(data);
            console.log(response)
            if(!response.ok) return setError(response.message); 
            
            navigate("/move&go")
                
            
        } catch (error) {
            setError("Error al iniciar sesión")
        }finally{
            setLoading(false)
        }
    }

    const checkAccount = useCallback(async() =>{
        try {
            const response = await checkAccountRequest();
            if(response.login){
                navigate("/move&go")
            }
        } catch (error) {
            
        }
    }, [navigate])

    useEffect(() =>{
        checkAccount();
    }, [checkAccount])

    return {login, loading, error, setError}
}