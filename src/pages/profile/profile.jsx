import { HeaderComponent } from '../../components/HeaderComponent';
import { useProfileHook } from '../../hooks/profileHook/useProfileHook';
import { HistoryTravels } from './historyTravels';
import { InfomationUser } from './infoUser';
import {ErrorMessage} from '../../components/ErrorMessage'
import './profile.css';
import { StripeConnect } from '../../components/stripeConnect';

export const ProfileComponent = ({ }) => {

    const { data, trips, loading, error, setError, refStripe, finishTrip, getEarnings, cancelTrip, getUsersListTravel, listNames } = useProfileHook();
    
    //console.log(data)
    return (
        <>
            <header className='profileHeader'>
                <HeaderComponent />
            </header>
            <main className='mainProfileContainer' >
                <ErrorMessage error={error} setError={setError}/>
                {data.rol === "driver" && data.stripe_onboarded === 0 && <StripeConnect />}
                <div className="profileContainer">
                    
                    <section className="InfoUser">
                        <InfomationUser data={data} getEarnings={getEarnings}/>
                    </section>

                    <section className='historyTravels'>
                        {data.rol != "user" && <HistoryTravels trips={trips} finishTrip={finishTrip} cancelTrip={cancelTrip} getUsersListTravel={getUsersListTravel} listNames={listNames}/>}
                    </section>

                </div>

            </main>
        </>
    )
}