import React, { useEffect, useState } from "react";
import "./Scrollindicator.css";

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercent, setScrollPercent] = useState("");

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const dataSets = await response.json();
            if (dataSets && dataSets.products && dataSets.products.length) {
                setData((prev) => [...prev, ...dataSets.products]);
                setLoading(false);
            }
        } catch (error) {
            setErrorMessage(error || "Something Went Wrong!");
        }
    };

    const handleScrollPercent = () => {
        const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        setScrollPercent(`${scrollPercent}%`);
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercent);

        return () => window.removeEventListener("scroll", handleScrollPercent);
    }, []);

    console.log("Products", data);

    if (loading) {
        return <h1>Loading Data Please Wait!</h1>;
    }

    if (errorMessage) {
        return <h1>{errorMessage}</h1>;
    }

    return (
        <div className="indicator-container">
            <div className="scroll-indicator-header">
                {/* <h1>Scroll Indicator</h1> */}
                <div className="scroll-indicator-container">
                    <div
                        className="scroll-indicator"
                        style={{ width: scrollPercent }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length
                    ? data.map((item, index) => <p key={index}>{item.title}</p>)
                    : null}
            </div>
        </div>
    );
}
