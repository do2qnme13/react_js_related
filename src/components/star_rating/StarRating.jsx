import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
export default function StarRating({ numberOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    };

    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex);
        // console.log(currentIndex);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };
    return (
        <div className="star-rating">
            {[...Array(numberOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                );
            })}
        </div>
    );
}
