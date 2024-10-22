import * as React from 'react';
import { useState } from 'react';
import Sdwebgis from './components/sdwebgis.jsx';
import Map from './components/map.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="sdlogo">
        <Sdwebgis />
      </div>
      <div className="map">
        <div className="marker m1"></div>
        <div className="marker m2"></div>
        <Map />
      </div>
      <div className="credit">
        <p className="link">
          Developed by{' '}
          <a href="https://spatialdecisions.com/" target="blank_">
            Spatial Decisions
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
