import { HeaderComponent } from '../../components/HeaderComponent';
import { useTripData } from '../../hooks/tripData/useTripData.mjs';
import rightArrow from '../../assets/rightArrow.svg'

import './tripReservation.css';
import { useNavigate, useParams } from 'react-router';
import { DriverInfo } from './infoDriver';
import { DetailsTrip } from './detailsTrip';

export const TripReservation = ({}) =>{
    const {loading, error, tripData} = useTripData();
    console.log(tripData)
    return(
        <>
            <header className='headerTripSelected'>
                <HeaderComponent />
            </header>
            <main className='mainTripInformation'>
                <div className="informationTrip">

                    <section className='imgDestination'>
                        <div className="imgContainer">
                            <img src={tripData.city_image} alt="" />
                        </div>
                        <span className='destinationData'>Destino <img src={rightArrow} alt="" />{tripData.destination_city}</span>
                    </section>

                    <section className='dateTime'>
                        <span>Fecha: {tripData.day}/{tripData.month}/{tripData.year}</span>
                        <span>Hora de salida: {tripData.hour}</span>
                    </section>

                    <section className='driverInfo'>
                        <DriverInfo tripData={tripData}/>
                    </section>

                    <section className='detailsTrip'>
                        <DetailsTrip tripData={tripData}/>
                    </section>
                </div>
            </main>
        </>
    )
}