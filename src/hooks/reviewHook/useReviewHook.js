import { useState, useCallback, useEffect } from "react";
import { reviewDriver } from "../../services/myReservations.services";

export const useReviewHook = () => {
    const [error, setError] = useState(null);
    const [stars, setStars] = useState(0);
    const [message, setMessage] = useState(null)
    const tagStar = document.querySelectorAll('.stars');

    const sendReview = async(event) => {
        try {
            const data = {
                id: event.target.id,
                qualification: stars,
                msg: message
            }

            console.log(data)

            const result = await reviewDriver(data)
            if(!result.ok) setError(result.message)
        } catch (error) {
            setError(error.message || "Error de servidor")
        }
    }

    const starsColor = useCallback(() => {
        tagStar.forEach((element) => {
            element.classList.remove('color')
        })
        for (let i = 0; i <= stars - 1; i++) {
            tagStar[i].classList.add('color')
        }
    }, [stars])

    window.onclick = (event) => {
        if (event.target.id === "reviewComponent") {
            setStars(0);
            setMessage(null);
            document.querySelector('.MessageQuialification').value = ''
            tagStar.forEach((element) => {
                element.classList.remove('color')
            })
            document.getElementById('reviewComponent').close();
        }
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setStars(0);
            setMessage(null);
            document.querySelector('.MessageQuialification').value = ''
            tagStar.forEach((element) => {
                element.classList.remove('color')
            })
            document.getElementById('reviewComponent').close();
        }
    })

    useEffect(() => {
        starsColor();
    }, [starsColor])

    return {
        setStars,
        sendReview,
        setMessage
    }
}