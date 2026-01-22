import { useCallback, useEffect, useRef, useState } from 'react'
import './generateTrip.css'
import { useNavigate } from 'react-router'
import { HeaderComponent } from '../../components/HeaderComponent';
import selectCar from '../../assets/selectCar.svg'
import { useGenerateTripData } from '../../hooks/tripG';
import { useUploadImage } from '../../hooks/uploadImages';

export const GenerateTrip = ({ }) => {
    const { cars, cityImages, setImageSelected, setSelectCar, getInfoTrip,  imgSelected, setOrigen, setDestination, origen, destination, selectCar} = useGenerateTripData();
    const {tripImageOrigin, tripImageDestination, saveImage, TImageO, TImageD, setCity,setCity2} = useUploadImage();
    //const [dataC, setDataC] = useState({});
    //const [cars, setCars] = useState([]);
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
        rolC.driver ? "" : "";
    }, [navigate])

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
                                    <span>{selectCar.select}</span>
                                    <svg className='selectCarInput' onClick={() => { carsOptionsRef.current.classList.toggle('showCars') }} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-5-5h10z" /></svg>

                                    <div className="carsOptions" ref={carsOptionsRef}>
                                        <ul className='carList'>
                                            {cars.map((element, index) => {
                                                return (
                                                    <li className='itemCar' key={index} title={element.model} >
                                                        <img src={element.img_vehicle} alt="" onClick={() => {
                                                            setSelectCar({
                                                                vehicle_id: element.id,
                                                                select: element.model,
                                                                model: element.model,
                                                                img: element.img_vehicle,
                                                                placas: element.plates,
                                                                color: element.color,
                                                                seats: element.seats,
                                                            }), carsOptionsRef.current.classList.toggle('showCars')
                                                        }} />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="showCar">
                                    <img className='carS imgBoxC' src={selectCar.img} alt="" />
                                </div>
                            </section>

                            <section className='origenDestination'>
                                <h3>Punto de partida</h3>
                                <div className="collectP">
                                    <p>Desde donde recogerás a los pasageros*</p>
                                </div>
                                <div className="inputCollect">
                                    <input className='collectPoint'name='collectPoint' type="text" placeholder='Escribe la dirrecion del punto de partida' />
                                </div>


{/* imagenes ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <div className="reference_Origin_Destination">
                                    <div className="imageReference">
                                        <div className="tripCImg">
                                            <h3>Origen</h3>
                                            <label htmlFor="Origen" onClick={() => document.getElementById('formUploadImage').style.display = 'flex'}>Selecciona imagen</label>

                                            <div className="formUploadImage" id='formUploadImage'>
                                                <div className="writeCity">
                                                    <input type="text" placeholder='Ciudad' className='ciudadImgO ciudadImg' onChange={(event) => setCity(event.target.value)}/>
                                                    <a href="#"><svg onClick={() => document.getElementById('formUploadImage').style.display = 'none'} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 15l3-3m0 0l-3-3m3 3H4m0-4.752V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8v-.05" /></svg></a>
                                                </div>

                                                <div className="imgContainerSelect">
                                                    <label className='clickSelector' htmlFor="selectImg"></label>
                                                    <input onChange={tripImageOrigin} type="file" id='selectImg' className='selectImg' />
                                                    <img className='imgSelected' src={TImageO.img} alt="" />
                                                </div>
                                                <a onClick={saveImage} href='#' className='saveOriginImage'>Guardar</a>
                                            </div>
                                        </div>

                                        <div className="imgContainer">
                                          
                                            <img className='referencePhoto' onClick={() => { document.getElementById('modalId1').showModal() }} src={imgSelected.originImg} alt="" />
                                           
                                            <dialog id='modalId1' close="any">
                                                <a className='closeModal' onClick={() => document.getElementById('modalId1').close()}>x</a>
                                                <ul className='Lista_Images'>
                                                    {cityImages.map((element, index) => {
                                                        return (
                                                            <li className='itemList' key={index} title={element.city} onClick={() =>{setImageSelected({originImg: element.image, destinationImg: imgSelected.destinationImg}), document.getElementById('modalId1').close()}}>
                                                                <img src={element.image} alt="" />
                                                                <span>{element.city}</span>
                                                            </li>
                                                        )

                                                    })}
                                                </ul>
                                            </dialog>
                                        </div>
                                        <div className="contaiDescript">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                            <input className='inputD inputO' type="text" placeholder='Ciudad de salida' onChange={(event) => setOrigen(event.target.value)} />
                                        </div>
                                    </div>

{/* segundo  images -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <div className="imageReference">
                                        <div className="tripCImg">
                                            <h3>Destino</h3>
                                            <label htmlFor="Destino" onClick={() => document.getElementById('formUploadImage2').style.display = 'flex'}>Selecciona imagen</label>

                                            <div className="formUploadImage" id='formUploadImage2'>

                                                <div className="writeCity">
                                                    <input type="text" placeholder='Ciudad' className='ciudadImgD ciudadImg' onChange={(event) => setCity2(event.target.value)} />
                                                    <a href="#"><svg onClick={() => document.getElementById('formUploadImage2').style.display = 'none'} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 15l3-3m0 0l-3-3m3 3H4m0-4.752V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8v-.05" /></svg></a>
                                                </div>

                                                <div className="imgContainerSelect">
                                                    <label className='clickSelector' htmlFor="selectImg2"></label>
                                                    <input onChange={tripImageDestination} type="file" id='selectImg2' className='selectImg2' />
                                                    <img className='imgSelected' src={TImageD.img} alt="" />
                                                </div>
                                                <a onClick={saveImage} href='#' className='saveDestinationImage'>Guardar</a>
                                            </div>
                                        </div>
                                        <div className="imgContainer">
                                            
                                            <img className='referencePhoto' onClick={() => { document.getElementById('modalId').showModal() }} src={imgSelected.destinationImg} />

                                            <dialog id='modalId'>
                                                <a className='closeModal' onClick={() => document.getElementById('modalId').close()}>x</a>
                                                <ul className='Lista_Images'>
                                                    {cityImages.map((element, index) => {
                                                        return (
                                                            <li className='itemList' key={index} title={element.city} onClick={() => {setImageSelected({originImg: imgSelected.originImg, destinationImg: element.image}), document.getElementById('modalId').close()}}>
                                                                <img src={element.image} alt="" />
                                                                <span>{element.city}</span>
                                                            </li>
                                                        )

                                                    })}
                                                </ul>
                                            </dialog>
                                        </div>
                                        <div className="contaiDescript">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                            <input className='inputD inputDestination' type="text" placeholder='Ciudad de destino' onChange={(event) => setDestination(event.target.value)} />
                                        </div>
                                    </div>
                                </div>

{/* data passengers ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                <div className="dataPassengers">
                                    <div className="quantity">
                                        <div className="inputPassengerC">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" /></svg>
                                            <span className='inputQuantity'>{selectCar.seats}</span>
                                        </div>
                                        <div className="priceTrip">
                                            <input type="text" placeholder='$Precio' name='price'/>
                                        </div>
                                    </div>
                                    <div className="dateTime">
                                        <label htmlFor="">Fecha y Hora de salida*</label>
                                        <div className="dateTInput">
                                            <div className="inputSvg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z" /></svg>
                                                <input type="datetime-local" name='departure_date'/>
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
                                    <img className='carS' src={selectCar.img} alt="" />
                                </div>
                                <div className="infoCar">
                                    <span className='model'>{selectCar.model}</span>
                                    <span className='placas'>Placas: {selectCar.placas}</span>
                                    <span className='color'>Color: {selectCar.color}</span>
                                </div>
                            </div>

                            <div className="infoTrip">
                                <div className="originInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoOrigin'>Origen: {origen}</span>
                                </div>
                                <div className="destinationInfo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                                    <span className='infoDestino'>Destino: {destination}</span>
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