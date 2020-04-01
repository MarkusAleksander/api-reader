import React from "react";
import style from "./FormatJSON.module.css";

const FormatJSON = (props) => {
    function buildFormattedJSON(data) {
        let items = [];

        let keys = Object.keys(data);

        let i = 0,
            l = keys.length;

        for (i; i < l; i++) {
            let currentKey = keys[i],
                currentValue = data[currentKey];

            // * is array?
            if (Array.isArray(currentValue)) {
                items.push(
                    <div
                        className={style["formatted-json__array"]}
                        key={currentKey + "__array"}
                    >
                        {buildFormattedJSON(currentValue)}
                    </div>
                );
                continue;
            }

            // * is object
            if (typeof currentValue === "object") {
                items.push(
                    <div
                        className={style["formatted-json__object"]}
                        key={currentKey + "__object"}
                    >
                        {buildFormattedJSON(currentValue)}
                    </div>
                );
                continue;
            }

            let valueHTML;

            // * test value HTML
            if (/(jpg|jpeg|png|gif|svg{1,})/.test(currentValue)) {
                valueHTML = (
                    <div className={style["formatted-json__entry__value"]}>
                        <span>{currentValue}</span>
                        <div
                            className={
                                style[
                                    "formatted-json__entry__value__img-wrapper"
                                ]
                            }
                        >
                            <img src={currentValue} alt="" />
                        </div>
                    </div>
                );
            } else {
                valueHTML = (
                    <span className={style["formatted-json__entry__value"]}>
                        {JSON.stringify(currentValue)}
                    </span>
                );
            }

            // * Is just key and value
            items.push(
                <div
                    className={style["formatted-json__entry"]}
                    key={currentKey + "__" + currentValue}
                >
                    <span className={style["formatted-json__entry__key"]}>
                        {currentKey}
                    </span>
                    {" : "}
                    {valueHTML}
                </div>
            );
        }

        return items;
    }

    return (
        <div className={style["formatted-json"]}>
            {buildFormattedJSON(props.data)}
        </div>
    );
};

export default FormatJSON;
