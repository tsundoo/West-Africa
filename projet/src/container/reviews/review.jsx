import React from 'react';
import './review.css';
import { data } from '../../constants';
import { SubHeading} from '../../components'
import { FaStar, FaRegStar, FaGoogle } from 'react-icons/fa'; // Import star icons


const Reviews = () => {

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (v, i) =>
            i < rating ? <FaStar key={i} className='star-icon'/> : <FaRegStar key={i} className='star-icon'/>
        );
    };

    return (
        <div className="review section__padding flex__center app__wrapper">
            <SubHeading title="Google Reviews"/>
            <h2 className='headtext__cormorant app__reviews-title'>4.9 rating of 100+ reviews</h2>
            <div className='review-list'>
                {data.map((review, index) => (
                    <div className="review-card" key={index}>
                        <h2>{review.username}</h2>
                        <p>{renderStars(review.rating)}</p>
                        <p>{review.reviewText}</p>
                        <FaGoogle className='google-icon'/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;