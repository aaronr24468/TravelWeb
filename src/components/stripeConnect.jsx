import { useCallback, useEffect } from 'react';
import '../styles/stripeConnect.css';

export const StripeConnect = ({ }) => {
    const URL_PATH = `https://api.moveandgo.com.mx`
    const connectStripe = async() =>{
        try {
            const result = await fetch(`${URL_PATH}/stripe/stripeConnect`,{
                method: 'POST',
                credentials: 'include',
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res) => res.json());
            window.location.href = result.url;
        } catch (error) {
            
        }
    }

    useEffect(() =>{
        document.getElementById('stripeConnectModal').showModal();
    }, [])

    return (
            <dialog id='stripeConnectModal'>
                <div className="messageConnect">
                    <h1>Activa tus pagos</h1>
                    <p>Para comenzar a recibir ganancias por tus viajes, debes finalizar tu registro en Stripe.
                        Sin este paso no podremos enviarte pagos y no podras generar viajes.</p>
                </div>
                <div className="btnActivar">
                    <button className='activarConnect' onClick={connectStripe}>Activar pagos ahora</button>
                </div>
                
            </dialog>

    )
}