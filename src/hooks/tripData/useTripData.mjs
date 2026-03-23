import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { getDataTripSelected, getReviewsList } from "../../services/tripData.mjs";


export const useTripData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tripData, setTripData] = useState([]);
    const [reviewsData, setReviewData] = useState({ rating: "0", total_reviews: 0 });
    const [reviews, setReviews] = useState([])
    const { idTrip } = useParams();

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const tripD = await getDataTripSelected(idTrip);
            setTripData(tripD.trip[0])


            const reviews = tripD.reviews[0];

            reviews.total_reviews > 0 ? (setReviewData(reviews)) : ('');

        } catch (error) {
            setError(error.message || "Error de servidor")
        } finally {

        }
    }, [])

    const getReviewsData = async (event) => {
        document.getElementById('showReviews').show();
        try {
            const idTrip = event.target.id;
            const reviewsL = await getReviewsList(idTrip);
            setReviews(reviewsL.reviews)
        } catch (error) {
            setError(error.message || 'Error de servidor')
        }


    }

    useEffect(() => {
        getData();
    }, [getData])

    return {
        loading,
        error,
        tripData,
        reviewsData,
        getReviewsData,
        reviews
    }
}