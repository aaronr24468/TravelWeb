import solarCase from '../../assets/SolarCase.svg';
import fontSuitCase from '../../assets/FontistoSuitcase.svg';
import backPack from '../../assets/backpack.svg';
import purse from '../../assets/purse.svg';
import suitcase from '../../assets/suitcase.svg';
import ok from '../../assets/ok.svg'
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg'
import point from '../../assets/map.svg';
import finish from '../../assets/finish.svg';
import hour from '../../assets/clock.svg';
import start from '../../assets/race.svg';
import flagpoint from '../../assets/flagpin.svg'

export const InfoTrip = ({ info }) => {
    console.log(info)

    return (
        <>
            <section className="driverDataReservation">
                <div className="driverInfoR">
                    <div className="driverIR">
                        <img src={info.image} alt="" />
                    </div>
                    <div className="dataDriverR">
                        <span>{info.name}</span>
                    </div>
                </div>
                <div className="carInfoR">
                    <img src={info.img_vehicle} alt="" />
                </div>
            </section>
            <section className="infoTripReservation">
                <div className="infoTripR">
                    <div className="originTR dataTInfo">
                        <div className="dataOriginT">
                            <span><img src={start} alt="" />{info.origin_city}</span>
                            <span><img src={point} alt="" />{info.starting_point}</span>
                            <span><img src={hour} alt="" />{info.departure_hour}</span>
                        </div>
                    </div>

                    <div className="destinationTR dataTInfo">
                        <div className="dataDestinationT">
                            <span><img src={flagpoint} alt="" />{info.destination_city}</span>
                            <span><img src={finish} alt="" />{info.destination_point}</span>
                            <span><img src={hour} alt="" />{info. arrived_hour}</span>
                        </div>
                    </div>

                    <div className="dateTrip">
                        <span>dia y mes de salida: </span>
                        <span>{info.day}/{info.month}</span>
                    </div>
                </div>


                <div className="totalR">
                    <div className="seatsInformation">
                        <span>Asientos disponibles: {info.available_seats}</span>
                        <div className="imgSuitcases">
                            <img className='imgSuitcaseContainer' src={solarCase} alt="" />
                            <img className='imgSuitcaseContainer' src={fontSuitCase} alt="" />
                            <img className='imgSuitcaseContainer' src={backPack} alt="" />
                            <img className='imgSuitcaseContainer' src={purse} alt="" />
                            <img className='imgSuitcaseContainer' src={suitcase} alt="" />
                        </div>
                    </div>

                    <div className="completeReservation">
                        <div className="selectNumberSeats">
                            <button className='btnSeats decreaseSeats'><img src={minus} alt="" /></button>
                            <span className='numberSeats' ref={info.amountSeat}>1</span>
                            <button className='btnSeats increaseSeats'><img src={plus} alt="" /></button>
                            <span className='seatsA'>Asientos <img src={ok} alt="" /></span>
                        </div>
                        <div className="priceTravel">
                            <span className='TotalPrice'>${info.price} MXN</span>
                        </div>
                        <div className="reserveNow">
                            <button type='submit' className='btnR buyReservation'>Reservar ahora</button>
                            <a className='btnR notReserve' onClick={() => (window.history.back())}>No reservar</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}