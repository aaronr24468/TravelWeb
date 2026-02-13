import { ErrorMessage } from '../../components/ErrorMessage';
import { useRegisterDriverHook } from '../../hooks/registerDriver/useRegisterDriverHook';
import './registerDriver.css';
import driver from '../../assets/driverPOV.jpg'
import eye from '../../assets/eye.svg';
import moveAndGo from '../../assets/logo sin fondo.png'


export const RegisterDriver = ({ }) => {

    const { loading, error, tempUrlImage, getInfoDriver, setError, getFile, verifyEmail } = useRegisterDriverHook();

    return (
        <main className='registerDriversContainer'>

            <ErrorMessage error={error} setError={setError} />

            <section className='containerFormDriver'>

                <div className="imageDriver contInfo">
                    <img className='driverPhotoShow' src={driver} alt="" />
                </div>

                <form onSubmit={getInfoDriver} action="" className='contInfo dataDriver'>
                    <div className="message">
                        <img src={moveAndGo} alt="" />
                    </div>
                    <section className="names">
                        <span>Nombre</span>
                        <div className="inputName">
                            <input type="text" name='name' placeholder='Nombres' />
                            <input type="text" name='lastname' placeholder='Apellidos' />
                            <input type="text" name='age' placeholder='Edad' />
                        </div>
                    </section>

                    <section className="userData">
                        <span>Usuario</span>
                        <div className="inputUsuario">
                            <input type="text" name='username' placeholder='Username' className='inputUserP' />
                            <div className="password inputUserP">
                                <input type="password" name='password' placeholder='Contraseña' className='passwordData' id='passwordData' />
                                <img src={eye} alt="" className='showPDriverR' onClick={(event) => {
                                    document.getElementById('passwordData').type === "password" ? (document.getElementById('passwordData').type = 'text')
                                    :
                                    (document.getElementById('passwordData').type = 'password');
                                }} />
                            </div>

                            <div className="confirmPassword inputUserP" >
                                <input type="password" name='passwordC' placeholder='Confirmar contraseña' className='passwordData' id='passwordData2' />
                                <img src={eye} alt="" className='showPDriverR' onClick={() => {
                                    document.getElementById('passwordData2').type === "password" ?
                                    (document.getElementById('passwordData2').type = 'text')
                                    :
                                    (document.getElementById('passwordData2').type = 'password');
                                }} />
                            </div>
                        </div>
                    </section>

                    <section className='EmailData'>
                        <span>Correo Electrónico</span>
                        <div className="correoData">
                            <input type="text" name='email' placeholder='Email' onChange={verifyEmail} />
                        </div>
                    </section>

                    <section className='phoneData'>

                        <div className='phoneDataC'>
                            <span>Telefono</span>
                            <input type="text" name='phone' placeholder='Telefono' />
                        </div>
                        <div className="selectImageD">
                            <label htmlFor="DriverPhoto" className='selectDriverPhoto'>
                                <img src={tempUrlImage} alt="" />
                            </label>
                            <input type="file" id='DriverPhoto' onChange={getFile} />
                        </div>
                    </section>

                    <button type='submit' className='submitDriver'>Registrarse</button>
                </form>
            </section>
        </main>
    )
}