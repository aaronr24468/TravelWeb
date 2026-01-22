import { HeaderComponent } from '../../components/HeaderComponent';
import './move&go.css';
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