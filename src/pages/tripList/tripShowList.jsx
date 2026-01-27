import './tripShowList.css';
import { HeaderComponent } from '../../components/HeaderComponent';
import { useTripList } from '../../hooks/listTrips/tripData.mjs';
export const ListTrips = ({ }) => {
    const { data, error, loading, navigate } = useTripList();

    return (
        <>
            <header className='headShowTrips'>
                <HeaderComponent />
            </header>
            <main className='mainListTravel'>
                <ul className='listTrips'>
                    {data.map((element) => {
                        return (
                            <li className='itemList' key={element.id}>
                                <section className="containerCityImg">
                                    <img src={element.city_image} alt="" />
                                </section>
                                <section className="infoTravel">
                                    <span>De: {element.origin}</span>
                                    <span>A: {element.destination}</span>
                                    <div className="seatsAvailableD" title='Asientos disponibles'>
                                        <div className="seatsAv">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19h6v2H9c-2.76 0-5-2.24-5-5V7h2v9c0 1.66 1.34 3 3 3m1.42-13.59c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0s-.78 2.05 0 2.83c.78.79 2.04.79 2.83 0M11.5 9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07L14.93 15H11.5z" /></svg>
                                            <span className='seatsA'>{element.available_seats}</span>
                                        </div>

                                        <div className="departure_date">
                                            <div className="dateTrip" title='dd/mm/yy'>
                                                <span>{element.day}/{element.month}/{element.year}</span>
                                            </div>
                                            <div className="hourTrip">
                                                <span>{element.hour} {element.setTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="priceButton">
                                        <span className='priceData'>${element.price}</span>
                                        <a onClick={() => navigate(`/move&go/showTrips/trips/${element.id}`)} className='checkTrip'>Ver viaje</a>
                                    </div>
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}