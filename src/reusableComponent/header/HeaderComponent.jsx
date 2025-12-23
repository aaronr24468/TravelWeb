import './headerC.css'
import logoMandG2 from '../../assets/logo sin fondo.png' //conseguir la imagen de diferente size para que quede bien 

export const HeaderComponent = ({}) =>{
    const img = localStorage.getItem('travelImage')

    return(
        <>
            <div className="headerMainComponent">
                <div className="imgContainerHeader">
                    <img className='headerImageLogo' src={logoMandG2} alt="" /> 
                </div>
                <nav className='navHeaderComponent'>
                    <ul className='listaNavHeader'>
                        <li><a className='travel-options' href="#">Viajes</a></li>
                        <li><a className='travel-options' href="#">Tarifas</a></li>
                        <li><a className='travel-options' href="#">Reservar</a></li>
                        <li><a className='travel-profile' href="#"><img src={img} alt="" /></a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}