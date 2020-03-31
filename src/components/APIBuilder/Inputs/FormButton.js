import React from "react";

const FormButton = (props) => {
    return (
        <button onClick={props.onclick}>{props.content}</button>
    )
}

export default FormButton;