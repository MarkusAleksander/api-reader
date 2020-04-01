import React from "react";
import style from "./FormatJSON.module.css";

const FormatJSON = (props) => {
    const FormatJSONEntry = (props) => {
        let key = props.dataKey,
            value = props.dataValue;

        let valueIsComplex =
            (Array.isArray(value) || typeof value === "object") &&
            value !== null;

        let isLink = typeof value === "string" && /(http{1,})/.test(value);

        let isImg =
            typeof value === "string" &&
            /(jpg|jpeg|png|gif|svg{1,})/.test(value);

        return (
            <div className={style["formatted-json__entry"]}>
                {key ? (
                    <span className={style["formatted-json__entry__key"]}>
                        {key}
                        {":"}
                    </span>
                ) : null}
                {valueIsComplex ? (
                    buildFormattedJSON(value)
                ) : value ? (
                    <span className={style["formatted-json__entry__value"]}>
                        {isLink ? (
                            <a
                                className={
                                    style["formatted-json__entry__value__link"]
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
                        {isImg ? (
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
                ) : null}
            </div>
        );
    };

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
            return (
                <div className={style["formatted-json__object"]}>
                    {Object.keys(data).map((key) => {
                        return (
                            <FormatJSONEntry
                                dataKey={key}
                                dataValue={data[key]}
                            ></FormatJSONEntry>
                        );
                    })}
                </div>
            );
        } else {
            return <FormatJSONEntry dataValue={data}></FormatJSONEntry>;
        }
    }

    return (
        <div className={style["formatted-json"]}>
            {buildFormattedJSON(props.data)}
        </div>
    );
};

export default FormatJSON;
