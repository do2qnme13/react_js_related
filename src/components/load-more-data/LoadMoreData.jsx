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
            console.log("Response", response);
            const data = await response.json();
            console.log("data", data);
            if (data && data.products && data.products.length) {
                setLoading(false);
                setProducts((prevData) => [...prevData, ...data.products]);
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

    return (
        <div>
            <button onClick={() => handleCount()}>Load More Data</button>
        </div>
    );
}
