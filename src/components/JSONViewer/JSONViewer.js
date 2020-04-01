import React from "react";

import FormatJSON from "./FormatJSON";

const JSONViewer = (props) => {
    let formattedJSON = <p>Create and send a request</p>;

    if (props.data) {
        formattedJSON = <FormatJSON data={props.data}></FormatJSON>;
    }

    return <div className="json-viewer">{formattedJSON}</div>;
};

export default JSONViewer;
