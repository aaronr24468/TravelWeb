import './tripInformation.css';
import { HeaderComponent } from '../../components/HeaderComponent';
import { useTripData } from '../../hooks/tripData/useTripData.mjs';
import rightArrow from '../../assets/rightArrow.svg'
import clock from '../../assets/clock.svg';
import date from '../../assets/date.svg'


import { useNavigate, useParams } from 'react-router';
import { DriverInfo } from './infoDriver';
import { DetailsTrip } from './detailsTrip';

export const TripReservation = ({}) =>{
    const {loading, error, tripData} = useTripData();

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
                        <span className='destinationData'>{tripData.origin_city} <img src={rightArrow} alt="" />{tripData.destination_city}</span>
                    </section>

                    <section className='dateTime'>
                        <span className='textInfo'><img className='svgLogo' src={date} alt="" />{tripData.day}/{tripData.month}/{tripData.year}</span>
                        <span className='textInfo'><img className='svgLogo' src={clock} alt="" /> {tripData.departure_hour}</span>
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