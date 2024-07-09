import Polyline from "@arcgis/core/geometry/Polyline"

export const createPolyline = (polylineProperty: __esri.PolylineProperties) => new Polyline(polylineProperty);