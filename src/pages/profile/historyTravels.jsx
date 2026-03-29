import { useState } from "react"
import details from '../../assets/details.svg'
import { UserListTravel } from "../../components/usersListTravel";

export const HistoryTravels = ({ trips, finishTrip, cancelTrip, getUsersListTravel, listNames, inProgressTrip }) => {
    const [select, setSelect] = useState(1);
    return (
        <>
            <section className="historyList">
                <span>Historial de Viajes</span>

                <button onClick={() => {
                    if (select === 0) {
                        setSelect(1)
                    } else if (select === 1) {
                        setSelect(3)
                    } else if (select === 3) {
                        setSelect(0)
                    }
                }}>
                    {select === 0 && <span>Viajes finalizados</span>}
                    {select === 1 && <span>Viajes disponibles</span>}
                    {select === 3 && <span>Viajes en Progreso</span>}
                </button>

                <ul className="InfoListUser" id="InfoListUser">
                    <UserListTravel listNames={listNames} />
                </ul>
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
                                            <span>Hora de salida: {element.departure_hour}</span>
                                            <span className="seatsA">Asientos disponibles: {element.available_seats}
                                                <img onMouseEnter={getUsersListTravel}
                                                    onMouseLeave={() => { document.getElementById('InfoListUser').style.display = "" }}
                                                    className="details" id={element.id} src={details} alt=""
                                                />
                                            </span>

                                            {/*Modificar este componente porque se muestra solo en 1 componente porque no cambia el class*/}


                                        </div>

                                    </div>
                                    <div className="actionButton">
                                        {element.status === 0 ?
                                            ''
                                            :
                                            <button className="BtnEndTrip cancelTripBtn" id={element.id} onClick={cancelTrip}>Cancelar Viaje</button>}
                                        {element.status === 1 ?
                                            <button className="BtnEndTrip" id={element.id} onClick={inProgressTrip}>Viaje en Curso</button>
                                            :
                                            <button className="BtnEndTrip" id={element.id} onClick={finishTrip}>Viaje Terminado</button>
                                        }

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