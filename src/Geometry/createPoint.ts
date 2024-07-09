import Point from "@arcgis/core/geometry/Point"

export const createPoint = (pointProperty: __esri.PointProperties) => new Point(pointProperty);