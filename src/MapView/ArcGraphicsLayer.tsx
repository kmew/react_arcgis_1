import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useContext, useEffect, useState } from "react";
import { GraphicsLayerContext, MapViewContext } from "../Contexts";
import React from "react";

interface IArcGraphicsLayer {
  children?: React.ReactNode;
}

const ArcGraphicsLayer = ({ children }: IArcGraphicsLayer) => {
  const { view } = useContext(MapViewContext);

  const [graphicsLayer, setGraphicsLayer] = useState<
    __esri.GraphicsLayer | undefined
  >();

  useEffect(() => {
    const _graphicsLayer = new GraphicsLayer();
    setGraphicsLayer(_graphicsLayer);

    return () => {
      console.log("Graphics Layer unmounting...");
    };
  }, []);

  useEffect(() => {
    if (!view || !graphicsLayer) return;
    view.map.add(graphicsLayer);
  }, [view, graphicsLayer]);

  return graphicsLayer ? (
    <GraphicsLayerContext.Provider value={{ graphicsLayer }}>
      {children}
    </GraphicsLayerContext.Provider>
  ) : null;
};

export default ArcGraphicsLayer;
