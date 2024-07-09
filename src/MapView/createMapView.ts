
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";
import { WEBMAP_STYLE_VALUE } from "../value/webmap_enum";

interface ICreateMapView {
  container: HTMLDivElement,
  mapProperties?: __esri.MapProperties
}

export const createMapView = ({ mapProperties, container}: ICreateMapView) => {
    const map = new Map({
        basemap: WEBMAP_STYLE_VALUE.OSM,
        ...mapProperties
      });
  
      return new MapView({
        map: map,
        container: container,
        center: [100.553, 13.8075],
        zoom: 15.5,
      });
}