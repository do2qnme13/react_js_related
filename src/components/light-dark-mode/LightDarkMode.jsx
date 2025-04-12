import React from "react";
import "./LightDarkMode.css";
import useLocalStorage from "./UseLocalStorage";

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div
            className={`light-dark-container ${
                theme === "dark" ? "dark" : "white"
            }`}
        >
            <div>
                <h1>Hello World</h1>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}
