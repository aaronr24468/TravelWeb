import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';
import '../styles/move&go.css';
import landscapeImage from '../assets/LandscapeXtrail.png'
import { Routes, Route, useNavigate } from 'react-router';
import { WelcomeComponent } from './welcomeComponent';
import { useEffect, useState } from 'react';

import profileImage from '../assets/perfilEmpty.jpg'

export const MainComponent = ({ }) => {
    
    const [userInfo, setInfo] = useState({ username: '', image: null })

    const getInfoUser = async () => {
        try {
            const userData = await fetch(`http://localhost:8080/v1/travel/getDataUser/navBar`, {
                method: 'get',
                credentials: "include",
                headers: {
                    "Content-Type": "Application/json"
                }
            }).then((res) => res.json());
            console.log(userData)
            if (userData.image === "") {
                userData.image = profileImage;
                setInfo(userData)
            }
            setInfo(userData)
        } catch (e) {

        }
    }

    

    useEffect(() => {
        getInfoUser();
    }, [])

    return (
        <>
            <div className="mainContainerContent">
                <header className='header-Move-And-Go'>
                    <HeaderComponent userInfo={userInfo} />
                </header>
                <main className='mainContainer-Move-And-Go'>
                    <WelcomeComponent />
                </main>
            </div>

        </>
    )
}