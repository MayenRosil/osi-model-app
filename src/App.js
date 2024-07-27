
import Layers from './components/Layers';
import Devices from './components/Devices'
import { layersData } from './data/layers';
import { devicesData } from './data/devices';
import './App.css';

import { useState } from 'react';

function App() {

  const [layers, setLayers] = useState(layersData);
  const [devices, setDevices] = useState(devicesData);

  return (
    <div className="App">
      <div className="layers-container">
        <Layers layers={layers} setLayers={setLayers} />
      </div>
      <div className="devices-container">
        <Devices devices={devices} setDevices={setDevices} />
      </div>
    </div>
  );
}

export default App;
