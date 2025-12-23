import { HeaderComponent } from '../reusableComponent/header/HeaderComponent';
import '../styles/move&go.css';
import landscapeImage from '../assets/LandscapeXtrail.png'
import { Routes, Route } from 'react-router';
import { WelcomeComponent } from './welcomeComponent';

export const MainComponent = ({ }) => {

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