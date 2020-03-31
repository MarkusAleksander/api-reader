import React, { Component } from "react";
import FormRow from "./FormRow";

import FormInput from "./Inputs/FormInput";
import FormLabel from "./Inputs/FormLabel";
import FormButton from "./Inputs/FormButton";

class APIBuilder extends Component {

    constructor (props) {
        super(props);

        this.state = {
            endpoint: "http://www.example.com/api",
            params: [],
            completeAPIURL: "http://www.example.com/api"
        }
    }

    handleEndpointChange = (e) => {
        console.log('updating endpoint...');

        this.setState({
            endpoint: e.target.value
        }, this.handleURLChange);
    }

    handleParameterInputChange = (value, key) => {
        console.log("updating param...");

        let params = [...this.state.params];

        let paramIdx = params.findIndex((p) => {
            return p.hasOwnProperty(key);
        });

        if(paramIdx < 0) return;

        params[paramIdx][key] = value;

        this.setState({params}, this.handleURLChange);
    }

    handleAddParameterClick = () => {
        console.log('adding param..');

        let newParam = {key: "value"};
        let params = [...this.state.params];

        params.push(newParam);

        this.setState({params}, this.handleURLChange);
    }

    handleRequestClick = () => {
        console.log('requesting..')
    }

    handleURLChange = () => {
        let completeAPIURL = this.state.endpoint + "?";

        let i = 0, l = this.state.params.length;

        for(i;i < l; i++) {
            let k = Object.keys(this.state.params[i])[0];
            completeAPIURL = completeAPIURL + k + "=" + this.state.params[i][k];

            if(i !== l - 1) {
                completeAPIURL = completeAPIURL + "&";
            }
        }

        this.setState({completeAPIURL});
    }

    render () {

        const params = this.state.params.map((param, idx) => {
            let k = Object.keys(param)[0];

            return (
                <FormRow key={k}>
                    <FormLabel for="" content="" />
                    <FormInput onchange={(e) => this.handleParameterInputChange(e.target.value, k)} value={this.state.params[idx][k]} name="" id="" />
                </FormRow>
            )
        });

        return (
            <div className="api-builder">
                <p className="api-result">Resulting API: {this.state.completeAPIURL}</p>
                <FormRow>
                    <FormLabel for="form_endpoint" content="API Endpoint URL" />
                    <FormInput onchange={this.handleEndpointChange} value={this.state.endpoint} name="endpoint" id="form_endpoint"  />
                </FormRow>

                {
                    params
                }

                <FormRow>
                    <FormButton content="Add" onclick={this.handleAddParameterClick} />
                    <FormButton content="Request" onclick={this.handleRequestClick} />
                </FormRow>
            </div>
        )
    }
}

export default APIBuilder;