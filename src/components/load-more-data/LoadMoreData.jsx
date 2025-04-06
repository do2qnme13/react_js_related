import React, { useEffect, useState } from "react";
import "./LoadMoreData.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            );
            const data = await response.json();
            // console.log("data", data);
            if (data && data.products && data.products.length) {
                setLoading(false);
                setProducts((prevData) => [...prevData, ...data.products]);
                // console.log("count ==>", products.length);
            }
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [count]);

    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    };
    console.log("products", products);

    if (loading) {
        return <div>Loading Data! Please Wait.</div>;
    }

    if (error) {
        return <div>Error While Fetching!</div>;
    }

    return (
        <div className="contianer">
            <div className="product-container">
                {products && products.length
                    ? products.map((product, index) => (
                          <div key={index} className="info-container">
                              <img src={product.thumbnail} />
                              <p>{product.title}</p>
                          </div>
                      ))
                    : null}
            </div>
            <button
                disabled={products.length == 100 ? true : false}
                className="fetch-btn"
                onClick={() => handleCount()}
            >
                Load More Data
            </button>
        </div>
    );
}
