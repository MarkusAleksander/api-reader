import React from "react";

const FormRow = (props) => {
    return (
        <div className="api-builder__row">
            {props.children}
        </div>
    )
}

export default FormRow;