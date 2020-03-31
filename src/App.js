import React from 'react';
import './App.css';

import Auxillary from "./hoc/Auxillary";
import LayoutColumn from "./components/Layouts/LayoutColumn";
import LayoutForm from "./components/Layouts/LayoutForm";

import APIBuilder from "./components/APIBuilder/APIBuilder";

function App() {
  return (
    <Auxillary>
      <LayoutColumn>
        <LayoutForm>
          <APIBuilder/>
        </LayoutForm>
      </LayoutColumn>
      <LayoutColumn>
        <p>Content</p>
      </LayoutColumn>
    </Auxillary>
  );
}

export default App;
