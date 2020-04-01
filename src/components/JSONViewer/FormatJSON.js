import React from "react";
import style from "./FormatJSON.module.css";

import Auxillary from "./../../hoc/Auxillary";

const FormatJSON = (props) => {
    function buildFormattedJSON(data) {
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
        }
    }

    return (
        <div className={style["formatted-json"]}>
            {buildFormattedJSON(props.data)}
        </div>
    );
};

export default FormatJSON;
