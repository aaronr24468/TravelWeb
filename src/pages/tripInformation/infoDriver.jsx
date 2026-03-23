import review from '../../assets/review.svg'

export const DriverInfo = ({ tripData, reviewsData, getReviewsData, reviews }) => {
    console.log(reviews)
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
                        <div className='ratingDriver'>
                            <img className='reviewSelect' id={tripData.driver_id} onClick={getReviewsData} src={review} alt="" />
                            <span className='ratingQuantity'>{reviewsData.rating}</span>
                        </div>

                        <p className='quantityReview'>({reviewsData.total_reviews} reviews)</p>

                        <dialog id='showReviews'>
                            <div className="mainContainerReviews">
                                <button className='btnCloseReviews' onClick={() => document.getElementById('showReviews').close()}>x</button>
                                <div className='listReviesAvailable'>
                                    {reviews.map((element) => {
                                        return (
                                            <div className="containerReview">
                                                <div className="dataUserR">
                                                    <div className="imageReview">
                                                        <img className='profileImageR' src={element.image} alt="" />
                                                        <span>{element.username}</span>
                                                    </div>
                                                    <div className='ratingR'>
                                                        <img className='ratingStars' src={review} alt="" />
                                                        <span>{element.qualification}</span>
                                                    </div>
                                                </div>
                                                <p className='commentReview'>{element.message}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </dialog>
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