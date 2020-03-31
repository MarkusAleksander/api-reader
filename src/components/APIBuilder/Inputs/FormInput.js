import React from "react";

const FormInput = (props) => {
    return (
        <input name={props.name} value={props.value} onChange={props.onchange} />
    )
}

export default FormInput;