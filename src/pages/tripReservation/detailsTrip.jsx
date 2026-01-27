import price from '../../assets/price.svg'
import seats from '../../assets/seats.svg'
export const DetailsTrip = ({tripData}) =>{

    return(
        <>
            <section className="detailsTripTitle">
                <span className='titlePrice'>Detalles del Viaje</span>
            </section>
            <section className="priceTrip">
                <div className="imgPrice">
                    <img className='imgTotal' src={price} alt="" />
                </div>
                <div className="total">
                    <span className="priceTitle">Precio:</span><span className="priceTotal">${tripData.price}</span>
                </div>
            </section>
            <section className='totalSeats'>
                <div className="imageSeats">
                    <img className='seatsImage' src={seats} alt="" />
                </div>
                <div className="seatsAvailable">
                    <span>Asientos Disponibles: {tripData.available_seats}</span>
                </div>
            </section>
            <section className='reservation'>
                <button className='seatReservation'>Reservar Asiento</button>
            </section>
        </>
    )
}