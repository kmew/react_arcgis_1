import Polygon from "@arcgis/core/geometry/Polygon"

export const createPolygon = (polygonProperty: __esri.PolygonProperties) => new Polygon(polygonProperty);