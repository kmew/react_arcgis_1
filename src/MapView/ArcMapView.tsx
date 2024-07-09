import React, { useEffect, useRef, useState } from "react";
import { createMapView } from "./createMapView";
import { MapViewContext } from "../Contexts";
import Basemap from "@arcgis/core/Basemap";

interface IArcMapView {
  children?: React.ReactNode;
  mapProperties?: __esri.MapProperties;
  onClick?: (e: __esri.ViewClickEvent) => void;
}

const ArcMapView = ({ children, mapProperties, onClick }: IArcMapView) => {
  const [view, setView] = useState<__esri.MapView | undefined>();

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const _view = createMapView({ mapProperties, container: mapRef.current});
    setView(_view);

    return () => _view && _view.destroy();
  }, [mapProperties]);

  useEffect(() => {
    if (!view || !mapProperties) return

    view.map.basemap = Basemap.fromId(mapProperties.basemap as string)
  }, [mapProperties, view])

  useEffect(() => {
    if (!view || !onClick) return

    const handle = view.on("click", onClick);

    return () => handle.remove()
  }, [onClick, view])

  return (
    <div className="h-[100vh]" ref={mapRef}>
      <MapViewContext.Provider value={{ view }}>
        {children}
      </MapViewContext.Provider>
    </div>
  );
};

export default ArcMapView;
