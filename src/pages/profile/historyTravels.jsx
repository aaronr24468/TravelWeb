export const HistoryTravels = ({ trips, finishTrip }) => {
    
    return (
        <>
            <section className="historyList">
                <span>Historial de Viajes</span>
            </section>
            <section className="listContainerTravels">
                <ul className="listTravelsC">
                    {trips.map((element) => {
                        return (
                            <li className="itemTrip" key={element.id}>
                                <div className="dataTrip">
                                    <div className="imageCity">
                                        <img src={element.city_image} alt="" />
                                    </div>
                                    <div className="infoTUser">
                                        <span>{element.origin_city} a {element.destination_city}</span>
                                        <span>Fecha: {element.departure_date}</span>
                                        <span>Asientos disponibles: {element.available_seats}</span>
                                    </div>

                                </div>
                                <button className="BtnEndTrip" id={element.id} onClick={finishTrip}>Viaje Terminado</button>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}