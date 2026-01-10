import '../styles/login.css';
import loginPhoto from '../assets/LoginPhoto.jpg'
import logoMandG from '../assets/logoMove&Go.png'
import logoMandG2 from '../assets/logo sin fondo.png'
import eye from '../assets/eye.svg'
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const LoginComponent = ({ }) => {
    const navigate = useNavigate();

    const getUserData = async(event) => {
        event.preventDefault();
        const data = {
            username: event.target[0].value,
            password: event.target[1].value
        }

        try {
            const login = await fetch('http://localhost:8080/login', {
                method: 'post',
                credentials: 'include',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            }).then((res) => res.json());
            console.log(login)
            if (login.login) {
                navigate('/move&go')
            }

        } catch (e) {

        }
    }

    const checkAccount = useCallback(async () => {
        const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
            method: 'get',
            credentials: "include",
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json());
        console.log(response)
        response.login? navigate('/move&go') : '';
    }, [])

    useEffect(() => {
        checkAccount();
    }, [])

    return (
        <>
            <main className='mainContainer'>
                <div className="mainBox">

                    <section className='imgC'>

                        <img src={loginPhoto} alt="" />

                    </section>

                    <section className='infoC'>

                        <div className="imagePage">

                            <img className='logoPage' src={logoMandG2} alt="" />

                            <form onSubmit={getUserData} className='inputData' method="post">

                                <div className='inputD'>
                                    <input type="text" placeholder='Username' />
                                </div>

                                <div className='inputD inputPass'>
                                    <input id='passwordD' type="password" placeholder='Password' />
                                    <img onClick={() => { document.getElementById('passwordD').type === "password" ? (document.getElementById('passwordD').type = "text") : (document.getElementById('passwordD').type = "password") }} className='showData' src={eye} alt="" />
                                </div>

                                <button className='submitBtn' type='submit'>Login</button>

                            </form>

                            <div className="registerPassword">
                                
                                <section className='registerS'>
                                    <div className="line"></div>
                                    <a onClick={() => navigate('/register')}>Register</a>
                                    <div className="line"></div>
                                </section>

                                <section className='forgotPassword'>
                                    <a href="#">Forgot password</a>
                                </section>

                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}