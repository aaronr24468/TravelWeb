import carSelect from '../../assets/RegisterCarSelected.svg'
export const RegisterVehicle = ({getDataCar, getPhotoCar, tempUrl}) =>{

    return(
        <>
            <dialog id="vehicleRegister" >
                <form action="" className="formRegisterCar" onSubmit={getDataCar}>
                    <div className="dataCarRegistration">
                        <div className="CarInfo">
                            <input className="inputDataCar" type="text" name="brand" placeholder="Marca" list="BrandList"/>
                            <datalist id="BrandList">
                                <option value="Ford"/>
                                <option value="Kia"/>
                                <option value="Honda"/>
                                <option value="Chevrolet"/>
                                <option value="Nissan"/>
                                <option value="Audi"/>
                                <option value="Mercedes"/>
                                <option value="BMW"/>
                                <option value="BYD"/>
                                <option value="Jac"/>
                            </datalist>

                            <input className="inputDataCar" type="text" name="model" placeholder="Modelo"/>
                            <input className="inputDataCar" type="text" name="color" placeholder="Color"/>
                            <input className="inputDataCar" type="text" name="plates" placeholder="Placas"/>

                            <div className="ensuredCheck">
                                <span>Carro asegurado <input className="inputDataCarCheck" type="checkbox" name="insured" placeholder="seguro"/></span>
                                <p>Aceptando este parametro aceptas que cualquier percanse es responsabilidad tuya, dado a que el carro tiene que estar asegurado y en regla.</p>
                            </div>
                            
                            <input className="inputDataCar" type="text" name="year" placeholder="Año" list="yearcar"/>
                            <datalist id="yearcar">
                                <option value="2010"/>
                                <option value="2011"/>
                                <option value="2012"/>
                                <option value="2013"/>
                                <option value="2014"/>
                                <option value="2015"/>
                                <option value="2016"/>
                                <option value="2017"/>
                                <option value="2018"/>
                                <option value="2019"/>
                                <option value="2020"/>
                                <option value="2021"/>
                                <option value="2022"/>
                                <option value="2023"/>
                                <option value="2024"/>
                                <option value="2025"/>
                                <option value="2026"/>
                            </datalist>

                            <input className="inputDataCar" type="text" name="seats" placeholder="Asientos" list="numberSeats"/>
                            <datalist id="numberSeats">
                                <option value="1"/>
                                <option value="2"/>
                                <option value="3"/>
                                <option value="4"/>
                                <option value="5"/>
                                <option value="6"/>
                                <option value="7"/>
                                <option value="8"/>
                                <option value="9"/>
                                <option value="10"/>
                                <option value="11"/>
                                <option value="12"/>
                                <option value="13"/>
                                <option value="14"/>
                                <option value="15"/>
                                <option value="16"/>
                                <option value="17"/>
                                <option value="18"/>
                            </datalist>
                        </div>
                        <div className="photoCar">
                            <label className='labelSelect' htmlFor="inputResgisterVehicle"><img className='selectImageCar' src={tempUrl} alt="" /></label>
                            <input type="file" id='inputResgisterVehicle' onChange={getPhotoCar}/>
                        </div>
                    </div>
                    <button type="submit" className="btnRegisterCar">Registrar</button>
                </form>
            </dialog>
        </>
    )
}