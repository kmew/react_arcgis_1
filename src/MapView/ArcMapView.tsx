import React, { useEffect, useRef, useState } from "react";
import { createMapView } from "./createMapView";
import { MapViewContext } from "../Contexts";

interface IArcMapView {
  children?: React.ReactNode;
}

const ArcMapView = ({ children }: IArcMapView) => {
  const [view, setView] = useState<__esri.MapView | undefined>();

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const _view = createMapView(mapRef.current);
    setView(_view);

    return () => _view && _view.destroy();
  }, []);

  return (
    <div className="h-[100vh]" ref={mapRef}>
      <MapViewContext.Provider value={{ view }}>
        {children}
      </MapViewContext.Provider>
    </div>
  );
};

export default ArcMapView;
