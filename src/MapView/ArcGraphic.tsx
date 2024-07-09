import Graphic from "@arcgis/core/Graphic";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GraphicsLayerContext } from "../Contexts";

const ArcGraphic = (graphicProperties: __esri.GraphicProperties) => {
  const { graphicsLayer } = useContext(GraphicsLayerContext);
  const [graphic, setGraphic] = useState<__esri.Graphic | undefined>();

  useEffect(() => {
    // const simpleMarkerSymbol = new SimpleMarkerSymbol({
    //   type: "simple-marker",
    //   style: "diamond",
    //   color: "red",
    //   outline: {
    //     color: "black",
    //     width: 2,
    //   },
    // });

    const graphicPoint = new Graphic(
      //   {
      //   geometry,
      //   symbol: simpleMarkerSymbol,
      // }
      graphicProperties
    );

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
};

export default ArcGraphic;
