import * as React from 'react';
import { useState } from 'react';
import Sdwebgis from './components/sdwebgis.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sdwebgis className="sdlogo" />
    </>
  );
}

export default App;
