import { useCallback, useEffect } from 'react'
import '../styles/generateTrip.css'
import { useNavigate } from 'react-router'
import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';

export const GenerateTrip = ({}) =>{
    const navigate = useNavigate();

    const checkRol = useCallback(async() =>{
        const rolC = await fetch('http://localhost:8080/v1/travel/verifyRol',{
            method: 'get',
            credentials: 'include',
            headers:{
                "Content-Type":"Application/json"
            }
        }).then((res) => res.json());
        rolC.driver? "": navigate('/move&go');
    },[])

    useEffect(() =>{
        checkRol();
    },[]);

    return(
        <>
            <main className="createTrip">
                <header className='Header-create-trip'>
                    <HeaderComponent />
                </header>
                <main className='Trip-form'>

                </main>
            </main>
        </>
    )
}