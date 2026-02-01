import { useGenerateTripData } from "../../hooks/registerTrip/useGenerateTripData";

export const StartingPoint = ({ selectCar, setOrigen, setDestination}) => {
    return (
        <>
            <h3>Punto de partida</h3>
            <div className="collectP">
                <p>Desde donde recogerás a los pasageros*</p>
            </div>
            <div className="inputCollect">
                <input className='collectPoint' name='collectPoint' type="text" placeholder='Escribe la dirrecion del punto de partida' />
            </div>
            <h3>Punto de Destino</h3>
            <div className="collectP">
                <p>Punto de destino de viaje*</p>
            </div>
            <div className="inputCollect">
                <input className='collectPoint' name='arrivedPoint' type="text" placeholder='Escribe la dirrecion del punto de destino' />
            </div>

            <div className="reference_Origin_Destination">
                <div className="ReferenceCity">
                    <div className="tripCImg">
                        <h3>Origen</h3>
                    </div>
                    
                    <div className="contaiDescript">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                        <input className='inputD inputO' type="text" placeholder='Ciudad de salida' onChange={(event) => setOrigen(event.target.value)} />
                    </div>
                </div>

                <div className="ReferenceCity">
                    <div className="tripCImg">
                        <h3>Destino</h3>
                    </div>
                    
                    <div className="contaiDescript">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M11.906 1.994a8 8 0 0 1 8.09 8.421a8 8 0 0 1-1.297 3.957a1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0" clipRule="evenodd" /></svg>
                        <input className='inputD inputDestination' type="text" placeholder='Ciudad de destino' onChange={(event) => setDestination(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className="dataPassengers">
                <div className="quantity">
                    <div className="inputPassengerC">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" /></svg>
                        <span className='inputQuantity'>{selectCar.seats}</span>
                    </div>
                    <div className="priceTrip">
                        <input type="text" placeholder='$Precio' name='price' />
                    </div>
                </div>
                <div className="dateTime">
                    <label htmlFor="">Fecha y Hora de salida*</label>
                    <div className="dateTInput">
                        <div className="inputSvg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z" /></svg>
                            <input type="date" name='departure_date' />
                        </div>
                    </div>
                </div>
                <div className="setTime">
                    <div className="departureTime">
                        <label htmlFor="">Hora de salida</label>
                        <input type="time" name="departureTime"/>
                    </div>
                    <div className="departureTime arrivedTime">
                        <label htmlFor="">Hora de llegada</label>
                        <input type="time" name="ArrivedTime"/>
                    </div>
                </div>
            </div>
        </>
    )
}