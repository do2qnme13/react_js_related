import React, { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (currentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel]: !displayCurrentChildren[currentLabel],
        });
    };
    console.log(displayCurrentChildren);

    return (
        <li>
            <div style={{ display: "flex", gap: "20px" }}>
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ? "-" : "+"}
                    </span>
                ) : null}
            </div>
            {item.children &&
            item.children.length > 0 &&
            displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
        </li>
    );
}
