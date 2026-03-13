import { useReviewHook } from '../hooks/reviewHook/useReviewHook'
import '../styles/reviewDriver.css'
export const ReviewTripDriver = ({ }) => {
    const { setStars, sendReview, setMessage } = useReviewHook();

    //me hace falta conseguir mandar el id del trip a el modal para acomodar el service del enpoint

    return (
        <>
            <dialog id="reviewComponent">
                <section className='containerReview'>
                    <p className="titleQ">Califica al conductor</p>
                    <ul className="quialificationStars">
                        <li onClick={() => setStars(1)} className="stars">&#9734;</li>
                        <li onClick={() => setStars(2)} className="stars">&#9734;</li>
                        <li onClick={() => setStars(3)} className="stars">&#9734;</li>
                        <li onClick={() => setStars(4)} className="stars">&#9734;</li>
                        <li onClick={() => setStars(5)} className="stars">&#9734;</li>
                    </ul>
                    <textarea className="MessageQuialification" onChange={(event) => setMessage(event.target.value)} ></textarea>
                    <button onClick={sendReview} className='sendReview'>Calificar</button>
                </section>

            </dialog>
        </>
    )
}