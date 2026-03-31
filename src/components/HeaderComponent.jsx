import '../styles/HeaderC.css'
import logoMandG2 from '../assets/logo sin fondo.png' //conseguir la imagen de diferente size para que quede bien 
import tripLogo from '../assets/trip.svg';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';


export const HeaderComponent = ({}) => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const return_url_inicio = import.meta.env.RETURN_URL;
    const [userInfo, setInfo] = useState({ username: '', image: null })

    const showUserOptions = (event) => {
        event.preventDefault();
        document.getElementById('userNav').classList.toggle("slide");
    }

    const getInfoUser = async () => {
        try {
            const userData = await fetch(`${API_URL}/auth/getDataUser/navBar`, {
                method: 'get',
                credentials: "include",
                headers: {
                    "Content-Type": "Application/json"
                }
            }).then((res) => res.json());
            //console.log(userData)
            userData.message.rol === "driver" || userData.message.rol === "Admin" ? (document.getElementById('viajeG').style.display = "flex") : (document.getElementById('viajeG').style.display = "none");
            if (userData.image === "") {
                userData.image = profileImage;
                setInfo(userData)
            }
            setInfo(userData.message)
        } catch (e) {

        }
    }

    const generateTrip = async (event) => {
        event.preventDefault();
        const driverR = await fetch(`${API_URL}/auth/verifyRol`, {
            method: 'get',
            credentials: "include",
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json());
        //console.log(driverR)
        driverR.message != "Forbidden" ? (navigate('/move&go/tripG')) : (alert('no tienes permisos para generar viajes'));
    }

    const logOut = async () => {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json());
        console.log(response)
        response.logout ? navigate('/') : alert("Something went wrong");
    }

    useEffect(() =>{
        getInfoUser();
    },[])

    return (
        <>
            <div className="headerMainComponent">
                <div className="imgContainerHeader">
                    <img className='headerImageLogo' src={logoMandG2} alt="" />
                </div>
                <nav className='navHeaderComponent'>
                    <ul className='listaNavHeader'>
                        <li><a className='travel-options' href="https://www.moveandgo.com.mx/move&go">Inicio</a></li>
                        <li><a className='travel-options' href="/move&go/showTrips">Viajes</a></li>
                        <li><a className='travel-options' href="#">Tarifas</a></li>
                        <li><a className='travel-profile' onClick={showUserOptions} href="#"><img src={userInfo.image} alt="" /></a></li>
                    </ul>
                    <div onClick={showUserOptions} className='userNav' id='userNav'>
                        <div className="containerList">
                            <ul onClick={showUserOptions} className='userListOptions'>
                                <li><a href="" onClick={() => navigate('/move&go/profile')} className="user-Options">perfil</a></li>
                                <li><a onClick={() =>{navigate('/move&go/myReservations')}} className="user-Options">Mis viajes</a></li>
                                <li className='viajeG' id='viajeG'><a href="#" className="user-Options user-viajesG" onClick={generateTrip}><img className='generateViajeLogo' src={tripLogo} alt="" />Generar viaje</a></li>
                                <li><a onClick={logOut} href="" className="user-Options">Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}