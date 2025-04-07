import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <div>
            {list && list.length ? list.map((listItem) => <MenuItem />) : null}
        </div>
    );
}
