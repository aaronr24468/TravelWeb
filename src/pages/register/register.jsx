import './register.css';
import eye from '../../assets/eye.svg';

import { useState } from 'react';
import { checkData } from '../../functions/checkRegisterData';
import { useNavigate } from 'react-router';
import { useRegisterUser } from '../../hooks/register/useRegisterUser.mjs';

export const RegisterComponent = ({ }) => {
    const hookRegister = useRegisterUser();

    return (
        <>
            <div className="mainRegisterContainer">
                <form onSubmit={hookRegister.registerUser} ref={hookRegister.form} className='formReg' method="post">
                    <div className="TitleRe">
                        <div className="WelcomeT">
                            <h2>Registrate gratis</h2>
                            <p>Bienvenido al registro para Move&Go, el registro es completamente gratis</p>
                        </div>
                        <div className="getDataInput">
                            <div className="inputItem">
                                <label htmlFor="">Nombre</label>
                                <input type="text" name='name'/>
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Apellido</label>
                                <input type="text" name='lastname'/>
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Edad</label>
                                <input type="text" name='age'/>
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Username</label>
                                <input type="text" name='username'/>
                            </div>
                            <div className="inputItem inputPass">
                                <label htmlFor="">Password</label>
                                <input id='registerPassword' type="password" name='password'/>
                                <img onClick={() => { document.getElementById('registerPassword').type === "password" ? (document.getElementById('registerPassword').type = "text") : (document.getElementById('registerPassword').type = "password") }} className='showRP' src={eye} alt="" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Telefono</label>
                                <input type="text" name='phone'/>
                            </div>
                            <div onChange={hookRegister.getImage} className="inputItem inputPhoto">
                                <label onChange={hookRegister.getImage} htmlFor="photoSelector"><img onChange={hookRegister.getImage} className='imgSelect' src={hookRegister.tempURL} alt="" /></label>
                                <input type="file" id='photoSelector' ref={hookRegister.photoRef} name='image'/>
                            </div>
                            <div className="btnTrigger">
                                <button type='submit'>Registrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}