import React, { useState } from "react";
import data from "./data";
import "./accordian.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelect, setmultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSelected = (selectedId) => {
        setSelected(selected === selectedId ? null : selectedId); //will close the accordian if click tiwce
    };

    const toggleMultiSelect = () => {
        setmultiSelect(!multiSelect);
        setSelected(null);
        setMultiple([]);
    };

    const handleMultiSelect = (selectedIndexId) => {
        let copyMultiple = [...multiple];
        const findCurrentIndexId = copyMultiple.indexOf(selectedIndexId);
        console.log("Current Index", findCurrentIndexId);

        if (findCurrentIndexId === -1) {
            copyMultiple.push(selectedIndexId);
        } else {
            copyMultiple.splice(findCurrentIndexId, 1);
        }

        setMultiple(copyMultiple);
    };

    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={toggleMultiSelect}>
                {multiSelect ? "Disable Multi Select" : "Enable Multi Select"}
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                className="title"
                                onClick={
                                    multiSelect
                                        ? () => handleMultiSelect(dataItem.id)
                                        : () => handleSelected(dataItem.id)
                                }
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ||
                            multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className="answer">
                                    <p>{dataItem.answer}</p>
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No Data Found !</div>
                )}
            </div>
        </div>
    );
}
