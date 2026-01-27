import review from '../../assets/review.svg'

export const DriverInfo = ({ tripData }) => {

    return (
        <>
            <div className="dataDriver">
                <div className="imgDriver">
                    <img src={tripData.image} alt="" />
                </div>
                <div className="infoD">
                    <span className='nameDriver'>{tripData.name}</span>
                    <span className='age'>Edad: {tripData.age}</span>
                    <div className="review">
                        <img className='reviewSelect' src={review} alt="" />
                        <p className='quantityReview'>(120 reviews)</p>
                    </div>
                </div>
            </div>
            <div className="dataCar">
                <section className='imgCar'>
                    <img className='carPhoto' src={tripData.img_vehicle} alt="" />
                </section>
                <section className='infoCar'>
                    <span className='model'>{tripData.brand} {tripData.model}</span>
                    <span>Placas: {tripData.plates}</span>
                    <span>Color: {tripData.color}</span>
                </section>
            </div>
        </>
    )
}