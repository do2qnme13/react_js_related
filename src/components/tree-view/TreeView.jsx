import React from "react";
import MenuList from "./MenuList";
import "./TreeVIew.css";

export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    );
}
