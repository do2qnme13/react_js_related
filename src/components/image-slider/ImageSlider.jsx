import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        setLoading(true);
        try {
            const response = await fetch(
                `${getUrl}?page=${page}&limit=${limit}`
            );
            const data = await response.json();
            // console.log("data", data);

            if (data) {
                setImages(data);
                setLoading(false);
            } else {
                console.log("No Data Found");
            }
        } catch (e) {
            setErrorMessage(e.message);
            setLoading(false);
        }
    }

    const handlePrevious = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
    };

    useEffect(() => {
        if (!url) return;
        fetchImages(url);
    }, [url]);

    if (loading) {
        return <div>Loading Data! Please Wait!</div>;
    }

    if (errorMessage !== null) {
        return <div>Error Occured!</div>;
    }

    return (
        <div className="image-sider-container">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {images && images.length
                ? images.map((imageItem, index) => (
                      <img
                          key={imageItem.id}
                          alt={imageItem.download_url}
                          src={imageItem.download_url}
                          className={
                              currentSlide === index
                                  ? "current-image"
                                  : "current-image hide-current-image"
                          }
                      />
                  ))
                : null}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className="circle-indicator">
                {images && images.length
                    ? images.map((_, index) => (
                          <button
                              key={index}
                              className={
                                  currentSlide === index
                                      ? "current-indicator"
                                      : "current-indicator hide"
                              }
                              onClick={() => setCurrentSlide(index)}
                          ></button>
                      ))
                    : null}
            </span>
        </div>
    );
}
