import '../styles/register.css';
import eye from '../assets/eye.svg';
import selectUser from '../assets/selectPhotoU.svg'
import { useState } from 'react';
import { checkData } from '../functions/checkRegisterData';
import { useNavigate } from 'react-router';

export const RegisterComponent = ({ }) => {
    const [userPhoto, setUserP] = useState(selectUser)
    const [photoRegister, setPhotoRegister] = useState(null)
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();
    

    const getImage = (event) => {
        const dataPhoto = document.getElementById('photoSelector').files[0];
        const imgCodified = URL.createObjectURL(dataPhoto); //creamos un url con la info de la url, la cual es temporal
        setUserP(imgCodified);
        setPhotoRegister(dataPhoto)
        setFlag(true)
    }

    const registerUser = async (event) => {
        event.preventDefault();


        const data = {
            name: event.target[0].value,
            lastname: event.target[1].value,
            age: event.target[2].value,
            username: event.target[3].value,
            password: event.target[4].value,
            phone: event.target[5].value,
            image: '',
        }

        const resCheck = checkData(data);

        if (resCheck === "Full") {

            const res = await fetch('http://localhost:8080/register', {
                method: 'put',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            }).then((res) => res.json());

            if (res === 'S' && flag === true) {
                const formData = new FormData;
                formData.append('image', photoRegister)
                console.log(formData)

                setTimeout(async () => {
                    const result = await fetch(`http://localhost:8080/register/setImage/${data.username}`, {
                        method: 'post',
                        body: formData
                    }).then((res) => res.json())

                    result === "S" ? (alert('Se realizo el registro con exito y la imagen tambien'), navigate('/login')) : (alert('Error al guardar la imagen'));
                }, 100)

            } else if(res === "S") {
                alert('Se realizo el registro con exito sin imagen')
                navigate('/')
            }else if(res === 'M'){
                alert('El username que quiere registrar, ya esta registrado')
            }else{
                alert('Error al registrar usuario')
            }

        } else {
            alert('Falta alguna casilla por rellenar')
        }
    }

    return (
        <>
            <div className="mainRegisterContainer">
                <form onSubmit={registerUser} className='formReg' method="post">
                    <div className="TitleRe">
                        <div className="WelcomeT">
                            <h2>Registrate gratis</h2>
                            <p>Bienvenido al registro para Move&Go, el registro es completamente gratis</p>
                        </div>
                        <div className="getDataInput">
                            <div className="inputItem">
                                <label htmlFor="">Nombre</label>
                                <input type="text" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Apellido</label>
                                <input type="text" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Edad</label>
                                <input type="text" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Username</label>
                                <input type="text" />
                            </div>
                            <div className="inputItem inputPass">
                                <label htmlFor="">Password</label>
                                <input id='registerPassword' type="password" />
                                <img onClick={() => { document.getElementById('registerPassword').type === "password" ? (document.getElementById('registerPassword').type = "text") : (document.getElementById('registerPassword').type = "password") }} className='showRP' src={eye} alt="" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="">Telefono</label>
                                <input type="text" />
                            </div>
                            <div onChange={getImage} className="inputItem inputPhoto">
                                <label onChange={getImage} htmlFor="photoSelector"><img onChange={getImage} className='imgSelect' src={userPhoto} alt="" /></label>
                                <input type="file" id='photoSelector' />
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