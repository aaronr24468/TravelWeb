import { useNavigate } from 'react-router';
import { HeaderComponent } from '../../components/HeaderComponent';
import './move&go.css';
import { WelcomeComponent } from './welcomeComponent';
import { useEffect, useCallback } from 'react';


export const MainComponent = ({}) => {

    const navigate = useNavigate();

    const checkAccount = useCallback(async () => {
      const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
        method: 'get',
        credentials: 'include',
        headers: {
          "Content-Type": "Application/json",
        }
      }).then((res) => res.json());
      response.ok ? '' : navigate('/');
    }, [])

    useEffect(() => {
      checkAccount();
    }, [checkAccount])

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