import { HeaderComponent } from '../../components/HeaderComponent';
import './reservationTrip.css';
import equis from '../../assets/equis.svg';
import aler from '../../assets/alert.svg'
import { useTripReservation } from '../../hooks/reservationTrip/useReservationInfo.js';
import { InfoTrip } from './infoTrip';
import { PaymentPage } from './PaymentPage';

export const ReservationTrip = ({ }) => {
    const dataTrip = useTripReservation();
    return (
        <>
            <main className='reservationPaymentContainer'>
                <form onSubmit={dataTrip.paymentIntent} className='reservationListInfo'>


                    <section className='quickInfoTrip'>
                        <InfoTrip info={dataTrip.infoTrip} />
                    </section>
                    <section className='conditions'>
                        <span className='titleAlert'><img className='alertConditions' src={aler} alt="" />Todas las cancelaciones reciben solo el 50% de reembolso</span>
                        <div className="checkBoxConfirm">
                            <p>Al reservar, confirmo que entiendo y acepto la política de cancelación de este servicio.</p>
                            <input type="checkbox" name='acceptPolicies' />
                        </div>

                    </section>
                </form>
                <section className='paymentSection'>
                    <PaymentPage clientSecret={dataTrip.clientSecretData} />
                </section>
            </main>
        </>
    )
}