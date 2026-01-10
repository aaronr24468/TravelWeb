import './headerC.css'
import logoMandG2 from '../../assets/logo sin fondo.png' //conseguir la imagen de diferente size para que quede bien 
import tripLogo from '../../assets/trip.svg';
import { useNavigate } from 'react-router';


export const HeaderComponent = ({ userInfo }) => {
    const navigate = useNavigate();

    const showUserOptions = (event) =>{
        event.preventDefault();
        document.getElementById('userNav').classList.toggle("slide");
    }

    const logOut = async () => {
            const response = await fetch('http://localhost:8080/v1/travel/logout', {
                method: 'get',
                credentials: 'include',
                headers: {
                    "Content-Type": "Application/json"
                }
            }).then((res) => res.json());
        console.log(response)
        response.logout ? navigate('/login') : alert("Something went wrong");
    }


    return (
        <>
            <div className="headerMainComponent">
                <div className="imgContainerHeader">
                    <img className='headerImageLogo' src={logoMandG2} alt="" />
                </div>
                <nav className='navHeaderComponent'>
                    <ul className='listaNavHeader'>
                        <li><a className='travel-options' href="#">Viajes</a></li>
                        <li><a className='travel-options' href="#">Tarifas</a></li>
                        <li><a className='travel-options' href="#">Reservar</a></li>
                        <li><a className='travel-profile' onClick={showUserOptions} href="#"><img src={userInfo.image} alt="" /></a></li>
                    </ul>
                    <div onClick={showUserOptions} className='userNav' id='userNav'>
                        <div className="containerList">
                            <ul className='userListOptions'>
                                <li><a href="" className="user-Options">perfil</a></li>
                                <li><a href="" className="user-Options">Mis viajes</a></li>
                                <li className='viajeG'><a href="" className="user-Options user-viajesG"><img className='generateViajeLogo' src={tripLogo} alt="" />Generar viaje</a></li>
                                <li><a onClick={logOut} href="" className="user-Options">Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}