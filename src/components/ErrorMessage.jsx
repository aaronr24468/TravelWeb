import { useEffect, useRef } from 'react';
import '../styles/ErrorMessage.css';

export const ErrorMessage = ({error, setError}) =>{
    
    useEffect(() =>{
        const errH = document.querySelector('.containerErr');
        console.log(error)
        if(error != null){
            errH.classList.add('showError')
            setTimeout(() =>{
                errH.classList.remove('showError')
                setError(null)
            }, 3000)
        }
    },[error])

    return(
        <div className='ErrorHandling'>
            <div className="showErrorData">
                <div className="containerErr">
                    <p>{error}</p>
                </div>
            </div>
        </div>
    )
}