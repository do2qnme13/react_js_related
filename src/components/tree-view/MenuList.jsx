import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <ul>
            {list && list.length
                ? list.map((listItem) => <MenuItem item={listItem} />)
                : null}
        </ul>
    );
}
