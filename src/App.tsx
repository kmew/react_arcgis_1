import React from "react";
import "./App.css";
import { ArcGraphic, ArcGraphicsLayer, ArcMapView } from "./MapView";
import ControlLayer from "./ControlLayer";
import {
  createPoint,
  createPolyline,
  createSimpleLineSymbol,
  createSimpleMarkerSymbol,
} from "./Geometry";
import { createPolygon } from "./Geometry/createPolygon";
import { createSimpleFillSymbol } from "./Geometry/createSimpleFillSymbol";
import { BASEMAP_OSM_VALUE } from "./value/basemap_osm_enum";
import { BASEMAP_ARCGIS_VALUE } from "./value/basemap_arcgis_enum";
// import NavBar from 'src/components/NavBar'

function App() {
  const point = createPoint({
    longitude: 100.56006234178523,
    latitude: 13.814641802512327,
  });

  const simpleMarkerSymbol = createSimpleMarkerSymbol({
    type: "simple-marker",
    style: "diamond",
    color: "red",
    outline: {
      color: "black",
      width: 2,
    },
  });

  const polyline = createPolyline({
    paths: [
      [
        [100.55137732074502, 13.798501977835087],
        [100.55937302262532, 13.812139511666118],
        [100.55827716500721, 13.824318021983544],
      ],
    ],
  });

  const simpleLineSymbol = createSimpleLineSymbol({
    color: "blue",
    cap: 'round',
    join: 'round',
    style: 'dash-dot',
    width: 3,
  });

  const PolyGon = createPolygon({
    rings: [
      [
        [100.5589701045945, 13.812574783606308],
        [100.55840188176813, 13.816358459391424],
        [100.54987854473814, 13.820378547772151],
        [100.55109616431366, 13.813008332749888],
        [100.54983795741794, 13.809342844898339],
        [100.54829563928888, 13.807175056140721],
        [100.54845798856644, 13.803154740002512],
        [100.55198908533555, 13.803036494361123],
        [100.55231378388919, 13.800671568939308],
        [100.55880775496053, 13.81174709612398],
        [100.5589701045945, 13.812574783606308],
      ],
    ],
  });

  const simpleFillSymbol = createSimpleFillSymbol({
    color: "green",
    style: 'diagonal-cross'
  });

  const PrintCoordinate = (e: __esri.ViewClickEvent) => {
    const { latitude, longitude } = e.mapPoint
    console.log(`lat: ${latitude} || long: ${longitude}`)
    const { x, y } = e;
    console.log(`x: ${x} || y: ${y}`)
    console.log('============')

  }

  return (
    <div className="App">
      <ControlLayer />
      <ArcMapView mapProperties={{basemap: BASEMAP_OSM_VALUE.HYBRID}} >
        <ArcGraphicsLayer>
          <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
          <ArcGraphic geometry={polyline} symbol={simpleLineSymbol} />
          <ArcGraphic geometry={PolyGon} symbol={simpleFillSymbol} />
        </ArcGraphicsLayer>
      </ArcMapView>
    </div>
  );
}

export default App;
