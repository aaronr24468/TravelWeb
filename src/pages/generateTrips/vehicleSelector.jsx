import { useRef } from "react"
import { useGenerateTripData } from "../../hooks/registerTrip/useGenerateTripData"
import { RegisterVehicle } from "./registerVehicle";

export const VehicleSelector = ({ carsOptionsRef, setSelectCar, selectCar, cars, cityList,setCityPhoto, cityPhoto, getDataCar }) => {
    const refCityModal = document.getElementById('listCityDestination');

    return (
        <>
            <h3>Vehicle</h3>
            <div className="selectV">
                <label htmlFor="">Seleccionar Vehiculo*</label>
                <div className="selectOptions">
                    <a onClick={() => refCityModal.showModal()} className="selectCity">Seleccionar Destino</a>
                    <a href="#" onClick={() => document.getElementById('vehicleRegister').showModal()}>Registrar Vehiculo</a>
                </div>

                

                <dialog id="listCityDestination" ref={refCityModal}>
                    <a className="closeListCity" onClick={() => refCityModal.close()}>x</a>
                    <ul className="modalListCitys">
                        {cityList.map((element) => {
                            return(
                                <li onClick={() => (setCityPhoto(element.image), refCityModal.close())} className="listItemCity" key={element.id}>
                                    <img className="cityImg" src={element.image} alt="" />
                                    <span className="cityName">{element.city}</span>
                                </li>
                            )
                        })}
                    </ul>
                </dialog>
            </div>

            <div className="inputSelected">
                <span>{selectCar.select}</span>
                <svg className='selectCarInput' onClick={() => { carsOptionsRef.current.classList.toggle('showCars') }} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-5-5h10z" /></svg>

                <div className="carsOptions" ref={carsOptionsRef}>
                    <ul className='carList'>
                        {cars.map((element, index) => {
                            return (
                                <li className='itemCar' key={index} title={element.model} >
                                    <img src={element.img_vehicle} alt="" onClick={() => {
                                        setSelectCar({
                                            vehicle_id: element.id,
                                            select: element.model,
                                            model: element.model,
                                            img: element.img_vehicle,
                                            placas: element.plates,
                                            color: element.color,
                                            seats: element.seats,
                                        }), carsOptionsRef.current.classList.toggle('showCars')
                                    }} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="showCar">
                <img className='carS imgBoxC' src={selectCar.img} alt="" />
                <img className='cityImg' src={cityPhoto} alt="" />
            </div>
        </>
    )
}