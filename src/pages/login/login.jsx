import './login.css';
import loginPhoto from '../../assets/LoginPhoto.jpg'
import logoMandG from '../../assets/logoMove&Go.png'
import logoMandG2 from '../../assets/logo sin fondo.png'
import eye from '../../assets/eye.svg'
import { useAuth } from '../../hooks/login/useAuth';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export const LoginComponent = ({ }) => {
    const refPassword = useRef(null)
    const{login, loading, error} = useAuth();
    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        const inputD = event.target
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        console.log(data)
        login(data);
    }


    return (
        <>
            <main className='mainContainer'>
                <div className="mainBox">

                    {/* imagen de login */}

                    <section className='imgC'>

                        <img src={loginPhoto} alt="" />

                    </section>

                    {/* form login */}

                    <section className='infoC'>

                        <div className="imagePage">

                            <img className='logoPage' src={logoMandG2} alt="" />

                            <form onSubmit={handleSubmit} className='inputData' method="post">

                                <div className='inputD'>
                                    <input type="text" placeholder='Username' name='username'/>
                                </div>

                                <div className='inputD inputPass'>
                                    <input id='passwordD' type="password" placeholder='Password' ref={refPassword} name='password'/>
                                    <img onClick={() => { refPassword.current.type === "password" ? (refPassword.current.type = "text") : (document.getElementById('passwordD').type = "password") }} className='showData' src={eye} alt="" />
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