
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";


export const createMapView = (container: HTMLDivElement) => {
    const map = new Map({
        basemap: "osm",
      });
  
      return new MapView({
        map: map,
        container: container,
        center: [100.54, 13.8],
        zoom: 11,
      });
}