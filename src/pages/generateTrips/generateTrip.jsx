import { useCallback, useEffect, useRef, useState } from 'react'
import './generateTrip.css'
import { useNavigate } from 'react-router'
import { HeaderComponent } from '../../components/HeaderComponent';
import selectCar from '../../assets/selectCar.svg'
import { useGenerateTripData } from '../../hooks/registerTrip/useGenerateTripData';
import { useUploadImage } from '../../hooks/registerTrip/uploadImages';
import { VehicleSelector } from './vehicleSelector';
import { StartingPoint } from './startingPoint';

export const GenerateTrip = ({ }) => {
    const tripCars = useGenerateTripData();
    const tripInfo = useUploadImage();

    const carsOptionsRef = useRef(null)
    
    const navigate = useNavigate();
    

    const checkRol = useCallback(async () => {
        const rolC = await fetch('http://localhost:8080/v1/travel/verifyRol', {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json());
        rolC.driver ? "" : navigate("/move&go");
    }, [])

    const checkAccount = useCallback(async () => {
      const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
        method: 'get',
        credentials: 'include',
        headers: {
          "Content-Type": "Application/json",
        }
      }).then((res) => res.json());
      response.ok ? '' : navigate('/');
    }, [])

    useEffect(() => {
        checkAccount();
        checkRol();
    }, [checkAccount,checkRol]);

    return (
        <>
            <main className="createTrip">

                <header className='Header-create-trip'>
                    <HeaderComponent />
                </header>


                <main className='Trip-form'>
                    <section className='createTrip'>
                        <h2>Crear Viaje</h2>
                        <span>Llena el formulario para programar un viaje</span>
                    </section>
                    <section className="containerData">

                        <form className="formTrip" id='formTrip' onSubmit={tripCars.getInfoTrip} >

                            <section className='vehicleSelector'>
                                <VehicleSelector carsOptionsRef={carsOptionsRef} {...tripCars}/>
                            </section>

                            <section className='origenDestination'>
                                <StartingPoint {...tripInfo} {...tripCars}/>

{/* data passengers ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                

                            </section>
                        </form>

                        <section className="summaryTrip">
                            <h3>Resumen del viaje</h3>

                            <div className="showCarSelected">
                                <div className="imgCarS">
                                    <img className='carS' src={tripCars.selectCar.img} alt="" />
                                </div>
                                <div className="infoCar">
                                    <span className='model'>{tripCars.selectCar.model}</span>
                                    <span className='placas'>Placas: {tripCars.selectCar.placas}</span>
                                    <span className='color'>Color: {tripCars.selectCar.color}</span>
                                </div>
                            </div>

                            <div className="infoTrip">
                                <div className="originInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoOrigin'>Origen: {tripCars.origen}</span>
                                </div>
                                <div className="destinationInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoDestino'>Destino: {tripCars.destination}</span>
                                </div>
                            </div>

                            <div className="programarViaje">
                                <button className='programarV' type='submit' form='formTrip'>Programar Viaje</button>
                            </div>
                        </section>

                    </section>
                </main>
            </main>
        </>
    )
}