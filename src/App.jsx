import * as React from 'react';
import { useState } from 'react';
import Sdwebgis from './components/sdwebgis.jsx';
import Map from './components/map.jsx';
import ModalCruiv from './components/modalCRUIV.jsx';
import ModalDibrugarh from './components/modalDibrugarh.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <>
      <div className="sdlogo">
        <Sdwebgis />
      </div>
      <div className="map">
        <Map />
        <ModalCruiv
          className="cruiv"
          id="cruiv"
          selectedModal={selectedModal}
          setSelectedModal={setSelectedModal}
        />
        <ModalDibrugarh
          className="dibrugarh"
          id="dibrugarh"
          selectedModal={selectedModal}
          setSelectedModal={setSelectedModal}
        />
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
