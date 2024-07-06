import React from "react";
import "./App.css";
import { ArcGraphic, ArcGraphicsLayer, ArcMapView } from "./MapView";
import ControlLayer from "./ControlLayer";
// import NavBar from 'src/components/NavBar'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <ControlLayer />
      <ArcMapView>
        <ArcGraphicsLayer>
          <ArcGraphic />
        </ArcGraphicsLayer>
      </ArcMapView>
    </div>
  );
}

export default App;
