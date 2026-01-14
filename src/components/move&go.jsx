import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';
import '../styles/move&go.css';
import landscapeImage from '../assets/LandscapeXtrail.png'
import { Routes, Route, useNavigate } from 'react-router';
import { WelcomeComponent } from './welcomeComponent';
import { useEffect, useState, useCallback } from 'react';

import profileImage from '../assets/perfilEmpty.jpg'

export const MainComponent = ({ }) => {
    const navigate = useNavigate();

    const checkAccount = useCallback(async () => {
            const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
                method: 'get',
                credentials: "include",
                headers: {
                    "Content-Type": "Application/json"
                }
            }).then((res) => res.json());
            //console.log(response)
            response.login? '' : navigate('/');
        }, [])
    
        useEffect(() => {
            checkAccount();
        }, [])

    return (
        <>
            <div className="mainContainerContent">
                <header className='header-Move-And-Go'>
                    <HeaderComponent />
                </header>
                <main className='mainContainer-Move-And-Go'>
                    <WelcomeComponent />
                </main>
            </div>

        </>
    )
}