import { useState, useEffect } from 'react';
import fetch from '../../service';
import PropTypes from 'prop-types';

function Reviews({ id }) {
    const [allReviews, setAllReviews] = useState(null);

    useEffect(() => {
        fetch.getReviewsById(id)
            .then(res => setAllReviews(res.results))
            .catch(console.log);
    }, [id]);
       
    function reviewsToJsx() {
        if (!allReviews) {
            return null
        };

        if (!allReviews.length) {
            return <p>We don't have any reviews for this movie</p>
        };

        return allReviews.map(item => {
            return (
                <li key={item.id}>
                    <p>Name: {item.author}</p>
                    <span>Review: {item.content}</span>
                    <hr />
                </li>
            );
        });

    };


    return (
        <ul>
            {reviewsToJsx()}
        </ul>
    )
};

Reviews.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Reviews;