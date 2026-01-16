import { useCallback, useEffect } from 'react'
import '../styles/generateTrip.css'
import { useNavigate } from 'react-router'
import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';
import selectCar from '../assets/selectCar.svg'

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
                    <section className='topSec secContent'>
                        <div className="imageVehicle">
                            <button className='selectVehicule'>
                                <img className='selectV' src={selectCar} alt="" />
                            </button>
                        </div>
                        <div className="userInformation">
                            <form className='formDriver' action="">
                                <div className="mainInfo boxInfo">

                                </div>
                                <div className="destination_images boxInfo">

                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </main>
        </>
    )
}