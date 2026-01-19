import { useCallback, useEffect, useState } from 'react'
import '../styles/generateTrip.css'
import { useNavigate } from 'react-router'
import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';
import selectCar from '../assets/selectCar.svg'

export const GenerateTrip = ({ }) => {
    const [dataC, setDataC] = useState({})
    const navigate = useNavigate();

    const getInfoTrip = (event) =>{
        event.preventDefault();
        console.log(event.target)
    }

    const dataDriver = async() =>{
        const driverD = await fetch('http://localhost:8080/v1/travel/formularioData',{
            method: 'get',
            credentials: 'include',
            headers:{
                "Content_Type":"Application/json"
            }
        }).then((res) => res.json());
        
        if(!driverD.message === "Error de servidor"){

        }else{
            console.log(driverD)
            setDataC(driverD)
        }
        
    }

    const checkRol = useCallback(async () => {
        const rolC = await fetch('http://localhost:8080/v1/travel/verifyRol', {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json());
        rolC.driver ? dataDriver() : navigate('/move&go');
    }, [])

    useEffect(() => {
        checkRol();
    }, []);

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

                        <form className="formTrip" id='formTrip' onSubmit={getInfoTrip}>

                            <section className='vehicleSelector'>
                                <h3>Vehicle</h3>
                                <div className="selectV">
                                    <label htmlFor="">Seleccionar Vehiculo*</label>
                                    <a href="#">Registrar Vehiculo</a>
                                </div>
                                <div className="inputSelected">
                                    <span>Seleccione Vehiculo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-5-5h10z" /></svg>
                                </div>
                                <div className="showCar">
                                    <img className='carS imgBoxC' src={null} alt="" />
                                </div>
                            </section>

                            <section className='origenDestination'>
                                <h3>Punto de partida</h3>
                                <div className="collectP">
                                    <p>Desde donde recogerás a los pasageros*</p>
                                </div>
                                <div className="inputCollect">
                                    <input className='collectPoint' type="text" placeholder='Escribe la dirrecion del punto de partida' />
                                </div>

                                <div className="reference_Origin_Destination">
                                    <div className="imageReference">
                                        <div className="tripCImg">
                                            <h3>Origen</h3>
                                            <label htmlFor="Origen">Selecciona imagen</label>
                                            <input id="Origen" type="file" />
                                        </div>
                                        <img className='referencePhoto' src={null} alt="" />
                                        <div className="contaiDescript">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                            <input className='inputD' type="text" placeholder='Ciudad de salida' />
                                        </div>
                                    </div>
                                    <div className="imageReference">
                                        <div className="tripCImg">
                                            <h3>Destino</h3>
                                            <label htmlFor="Destino">Selecciona imagen</label>
                                            <input id="Destino" type="file" />
                                        </div>
                                        <img className='referencePhoto' src={null}/>
                                        <div className="contaiDescript">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                            <input className='inputD' type="text" placeholder='Ciudad de destino' />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="dataPassengers">
                                    <div className="quantity">
                                        <label>Cantidad de pasajeros*</label>
                                        <div className="inputPassengerC">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" /></svg>
                                            <span className='inputQuantity'>{dataC.seats}</span>
                                        </div>
                                    </div>
                                    <div className="dateTime">
                                        <label htmlFor="">Fecha y Hora de salida*</label>
                                        <div className="dateTInput">
                                            <div className="inputSvg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z" /></svg>
                                                <input type="datetime-local" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </form>

                        <section className="summaryTrip">
                            <h3>Resumen del viaje</h3>

                            <div className="showCarSelected">
                                <div className="imgCarS">
                                    <img className='carS' src={null} alt="" />
                                </div>
                                <div className="infoCar">
                                    <span className='model'>Car model</span>
                                    <span className='placas'>Placas:</span>
                                    <span className='color'>Color</span>
                                </div>
                            </div>

                            <div className="infoTrip">
                                <div className="originInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoOrigin'>Origen:</span>
                                </div>
                                <div className="destinationInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoDestino'>Destino:</span>
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