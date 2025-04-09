import React from "react";
import MenuList from "./MenuList";
import "./TreeVIew.css";

export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <h2>Tree View</h2>
            <MenuList list={menus} />
        </div>
    );
}
