import './welcomeComponent.css';
import carImage from '../../assets/LandscapeXtrail.png'
import carImage2 from '../../assets/testBack.jpg'
import carImage3 from '../../assets/test2.png'
import packages from '../../assets/package.svg'
import van from '../../assets/van.svg'
import groceries from '../../assets/groceries.svg'

export const WelcomeComponent = ({ }) => {

    return (
        <>
            <div className="containerWelcome">
                <section className="welcomeImage"></section>{/*Aqui esta la imagen del background*/}
                <section className="infoWelcome">
                    <div className="travel-Dialogo">
                        <h1>Viaje cómodo con nosotros</h1>
                        <p>Transporte de pasajero, paquetería y despensas</p>
                        <button className='Travel-Reservar-Viaje'>Reservar ahora</button>
                    </div>
                    <div className="infoSection">
                        <div className="travel-container-info">
                            <img src={van} alt="" />
                            <h3>Transporte de pasajeros</h3>
                            <p>Viajes compartidos</p>
                        </div>
                        <div className="travel-container-info">
                            <img src={packages} alt="" />
                            <h3>Servicio de paquetería</h3>
                            <p>Envios de paquetes a domicilio</p>
                        </div>
                        <div className="travel-container-info">
                            <img src={groceries} alt="" />
                            <h3>Despensas</h3>
                            <p>Compra de despensas con entrega de domicilio</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}