import React, { Component } from 'react';
import './App.css';

import Auxillary from "./hoc/Auxillary";
import LayoutColumn from "./components/Layouts/LayoutColumn";
import LayoutForm from "./components/Layouts/LayoutForm";

import APIBuilder from "./components/APIBuilder/APIBuilder";
import JSONViewer from "./components/JSONViewer/JSONViewer";

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      requestData: null
    }
  }

  updateRequestData = (requestData) => {
    this.setState({requestData});
  }

  render () {
    return (
      <Auxillary>
        <LayoutColumn>
          <LayoutForm>
            <APIBuilder onRequest={this.updateRequestData} />
          </LayoutForm>
        </LayoutColumn>
        <LayoutColumn>
          <JSONViewer data={this.state.requestData} />
        </LayoutColumn>
      </Auxillary>
    );
  }
}

export default App;
