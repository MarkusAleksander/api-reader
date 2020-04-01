import React from "react";
import style from "./FormatJSON.module.css";

import Auxillary from "./../../hoc/Auxillary";

const FormatJSON = (props) => {
    function buildFormattedJSON(data) {
        let items = [];
        // debugger;
        // Is current obj an Array or Object?

        if (Array.isArray(data)) {
            return (
                <div className={style["formatted-json__array"]}>
                    {data.map((el) => {
                        return buildFormattedJSON(el);
                    })}
                </div>
            );
        } else if (typeof data === "object" && data !== null) {
            let keys = Object.keys(data);

            return (
                <div className={style["formatted-json__object"]}>
                    {keys.map((key) => {
                        let value = data[key];
                        return (
                            <div className={style["formatted-json__entry"]}>
                                <span
                                    className={
                                        style["formatted-json__entry__key"]
                                    }
                                >
                                    {key}
                                    {":"}
                                </span>
                                {Array.isArray(value) ||
                                typeof value === "object" ? (
                                    buildFormattedJSON(value)
                                ) : (
                                    <span
                                        className={
                                            style[
                                                "formatted-json__entry__value"
                                            ]
                                        }
                                    >
                                        {typeof value === "string" &&
                                        /(http{1,})/.test(
                                            value.toLowerCase()
                                        ) ? (
                                            <a
                                                className={
                                                    style[
                                                        "formatted-json__entry__value__link"
                                                    ]
                                                }
                                                href={value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            JSON.stringify(value)
                                        )}

                                        {typeof value === "string" &&
                                        /(jpg|jpeg|png|gif|svg{1,})/.test(
                                            value.toLowerCase()
                                        ) ? (
                                            <div
                                                className={
                                                    style[
                                                        "formatted-json__entry__value__img-wrapper"
                                                    ]
                                                }
                                            >
                                                <img src={value} alt="" />
                                            </div>
                                        ) : null}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        } else {
        }

        // console.log(data);

        // let keys = Object.keys(data);

        // let i = 0,
        //     l = keys.length;

        // for (i; i < l; i++) {
        //     let currentKey = keys[i],
        //         currentValue = data[currentKey];

        //     // * is array?
        //     if (Array.isArray(currentValue)) {
        //         items.push(
        //             <div
        //                 className={style["formatted-json__array"]}
        //                 key={currentKey + "__array"}
        //             >
        //                 <span className={style["formatted-json__entry__key"]}>
        //                     {currentKey}
        //                 </span>
        //                 <span className={style["formatted-json__entry__entry"]}>
        //                     {buildFormattedJSON(currentValue)}
        //                 </span>
        //             </div>
        //         );
        //         continue;
        //     }

        //     // * is object
        //     if (typeof currentValue === "object" && currentValue !== null) {
        //         items.push(
        //             // <div
        //             //     className={style["formatted-json__object"]}
        //             //     key={currentKey + "__object"}
        //             // >
        //             //     <span className={style["formatted-json__entry__key"]}>
        //             //         {currentKey}
        //             //     </span>
        //             //     <span className={style["formatted-json__entry__entry"]}>
        //             //         {buildFormattedJSON(currentValue)}
        //             //     </span>
        //             // </div>

        //             <div
        //                 className={style["formatted-json__entry"]}
        //                 key={currentKey + "__object"}
        //             >
        //                 <span className={style["formatted-json__entry__key"]}>
        //                     {currentKey}
        //                 </span>
        //                 {" : "}
        //                 <div className={style["formatted-json__object"]}>
        //                     {buildFormattedJSON(currentValue)}
        //                 </div>
        //             </div>
        //         );
        //         continue;
        //     }

        //     let valueHTML;

        //     // * test value HTML
        //     if (
        //         typeof currentValue === "string" &&
        //         /(jpg|jpeg|png|gif|svg{1,})/.test(
        //             currentValue.trim().toLowerCase()
        //         )
        //     ) {
        //         valueHTML = (
        //             <Auxillary>
        //                 <span>{currentValue}</span>
        //                 <div
        //                     className={
        //                         style[
        //                             "formatted-json__entry__value__img-wrapper"
        //                         ]
        //                     }
        //                 >
        //                     <img src={currentValue} alt="" />
        //                 </div>
        //             </Auxillary>
        //         );
        //     } else if (
        //         typeof currentValue === "string" &&
        //         /(http{1,})/.test(currentValue.trim().toLowerCase())
        //     ) {
        //         valueHTML = (
        //             <span className={style["formatted-json__entry__value"]}>
        //                 <a href={currentValue}>{currentValue}</a>
        //             </span>
        //         );
        //     } else {
        //         valueHTML = (
        //             <span className={style["formatted-json__entry__value"]}>
        //                 {JSON.stringify(currentValue)}
        //             </span>
        //         );
        //     }

        //     // * Is just key and value
        //     items.push(
        //         <div
        //             className={style["formatted-json__entry"]}
        //             key={currentKey + "__" + currentValue}
        //         >
        //             <span className={style["formatted-json__entry__key"]}>
        //                 {currentKey}
        //             </span>
        //             {" : "}
        //             {valueHTML}
        //         </div>
        //     );
        // }

        return items;
    }

    return (
        <div className={style["formatted-json"]}>
            {buildFormattedJSON(props.data)}
        </div>
    );
};

export default FormatJSON;
