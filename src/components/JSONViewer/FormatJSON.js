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
                    <div className={style["formatted-json__array"]}>
                        {buildFormattedJSON(currentValue)}
                    </div>
                );
                continue;
            }

            // * is object
            if (typeof currentValue === "object") {
                items.push(
                    <div className={style["formatted-json__object"]}>
                        {buildFormattedJSON(currentValue)}
                    </div>
                );
                continue;
            }

            // * Is just key and value
            items.push(
                <div className={style["formatted-json__entry"]}>
                    <span className={style["formatted-json__entry__key"]}>
                        {currentKey}
                    </span>
                    {" : "}
                    <span className={style["formatted-json__entry__value"]}>
                        {JSON.stringify(currentValue)}
                    </span>
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
