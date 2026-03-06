import { HeaderComponent } from '../../components/HeaderComponent'
import { useMyReservationData } from '../../hooks/myReservation/useMyReservation'
import './myReservation.css'
import arrow from '../../assets/rightArrow.svg'

export const MyReservations = ({ }) => {
    const { data, loading, error, setError, cancelReservation, } = useMyReservationData();

    console.log(data)
    return (
        <>
            <header className='headerMyResevations'>
                <HeaderComponent />
            </header>
            <main className='listMyReservations'>
                <ul className='listReservations'>
                    {data.map((element) => {
                        if (element.payment_status != "pending" && element.payment_status != "expired") {
                            return (
                                <li className='itemReservation' key={element.id}>

                                    {element.refund_status === "pending" && <div className='msgRefund'>
                                        <span>Rembolso pendiente</span>
                                    </div>}

                                    {element.refund_status === "refund" && <div className='msgRefund'>
                                        <span>Rembolso exitoso</span>
                                    </div>}

                                    {element.trip_completed === 1 && <div className='msgRefund'>
                                        <span>Viaje finalizado</span>
                                    </div>}


                                    <section className="infoReser">
                                        <div className="imageContainerReser">
                                            <img src={element.city_image} alt="" />
                                            <div className="destinationReser">
                                                <span>{element.origin_city}</span>
                                                <img className='arrowTrip' src={arrow} alt="" />
                                                <span>{element.destination_city}</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="data">
                                        <div className="tripinfo">
                                            <span>Total: ${element.total_amount}</span>
                                            <div className="paid">
                                                {element.payment_status === "paid" && <span>Status: Pagado</span>}
                                            </div>
                                            <span>Salida: {element.day}/{element.month}/{element.year}</span>
                                            {element.refund_status === "refund" ?
                                                element.trip_completed === 0 && <span>Viaje: Cancelado</span>
                                                :
                                                (
                                                    element.trip_completed === 0 && <span>Viaje: en proceso</span> || element.trip_completed === 1 && <span>Viaje: en proceso</span>
                                                )
                                            }

                                        </div>
                                        <div className="cancelTrip">
                                            <button className='cancelTripBtn' onClick={() => { document.getElementById('dialogCancelTrip').showModal() }}>Cancelar</button>
                                        </div>
                                    </section>

                                    <dialog id='dialogCancelTrip'>
                                        <div className="cancelTripContainer">
                                            <span className='stripeTime'>
                                                Los reembolsos suelen tardar entre 5 y 10 días hábiles
                                                en aparecer en la cuenta del cliente. Aunque el proceso se inicia
                                                de inmediato, el tiempo final depende del banco emisor de la tarjeta.
                                            </span>
                                            <div className="confirmationBtn">
                                                <button className='btnConfirmation cancel' onClick={() => document.getElementById('dialogCancelTrip').close()}>No cancelar</button>
                                                <button className='btnConfirmation confirm' id={element.id} onClick={cancelReservation}>Cancelar Viaje</button>
                                            </div>
                                        </div>
                                    </dialog>

                                </li>
                            )
                        }
                    })}
                </ul>



            </main>
        </>
    )
}