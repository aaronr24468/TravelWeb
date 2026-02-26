import { useState } from "react"

export const HistoryTravels = ({ trips, finishTrip, cancelTrip }) => {
    const [select, setSelect] = useState(1);
    return (
        <>
            <section className="historyList">
                <span>Historial de Viajes</span>

                <button onClick={() => select === 1 ? (setSelect(0)) : (setSelect(1))}>
                    {select === 1 && <span>Viajes finalizados</span>}
                    {select === 0 && <span>Viajes disponibles</span>}
                </button>
            </section>
            <section className="listContainerTravels">
                <ul className="listTravelsC">
                    {trips.map((element) => {
                        if (element.status === select) {
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
                                    <div className="actionButton">
                                        {element.status === 0 ?
                                            ''
                                            :
                                            <button className="BtnEndTrip cancelTripBtn" id={element.id} onClick={cancelTrip}>Cancelar Viaje</button>}
                                        {element.status === 0 ?
                                            ''
                                            :
                                            <button className="BtnEndTrip" id={element.id} onClick={finishTrip}>Viaje Terminado</button>}
                                    </div>


                                </li>
                            )
                        }

                    })}
                </ul>
            </section>
        </>
    )
}