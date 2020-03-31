import React from 'react';
import './App.css';

import Auxillary from "./hoc/Auxillary";
import LayoutColumn from "./components/Layouts/LayoutColumn";

function App() {
  return (
    <Auxillary>
      <LayoutColumn>
        <p>Content</p>
      </LayoutColumn>
      <LayoutColumn>
        <p>Content</p>
      </LayoutColumn>
    </Auxillary>
  );
}

export default App;
