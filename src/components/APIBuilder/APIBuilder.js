import React from "react";
import FormRow from "./FormRow";

import FormInput from "./Inputs/FormInput";
import FormLabel from "./Inputs/FormLabel";
import FormButton from "./Inputs/FormButton";

const APIBuilder = (props) => {
    return (
        <div className="api-builder">
            <FormRow>
                <FormLabel />
                <FormInput />
            </FormRow>
            <FormRow>
            </FormRow>
            <FormRow>
                <FormButton content="Add" onclick="onAddParameterBtnClick" />
                <FormButton content="Request" onclick="onRequestBtnClick" />
            </FormRow>
        </div>
    )
}

export default APIBuilder;