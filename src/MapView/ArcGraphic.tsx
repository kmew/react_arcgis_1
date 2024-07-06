import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GraphicsLayerContext } from "../Contexts";

const ArcGraphic = () => {
  const { graphicsLayer } = useContext(GraphicsLayerContext);
  const [graphic, setGraphic] = useState<__esri.Graphic | undefined>();

  useEffect(() => {
    const point = new Point({
      longitude: 100.54,
      latitude: 13.8,
    });

    const simpleMarkerSymbol = new SimpleMarkerSymbol({
      type: "simple-marker",
      style: "diamond",
      color: "red",
      outline: {
        color: "black",
        width: 2,
      },
    });

    const graphicPoint = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
    });

    setGraphic(graphicPoint);

    return () => {
      console.log("Graphic unmounting...");
    };
  }, []);

  useEffect(() => {
    if (!graphic || !graphicsLayer) return;
    graphicsLayer.add(graphic);
  }, [graphic, graphicsLayer]);

  return <></>;
} 

export default ArcGraphic