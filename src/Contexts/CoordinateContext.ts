import { createContext } from "react";


interface ICoordinateContext {
    x: number,
    y: number
}



export const GraphicsLayerContext = createContext<ICoordinateContext>({
    x: 100.54,
    y: 13.8
})