import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import "ol/ol.css";

export const SensorMap = ({ coordinates }: { coordinates: number[] }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const lonLat = coordinates;

    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(lonLat)),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        src: "/location.svg",
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature],
      }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat(lonLat),
        zoom: 14,
      }),
    });

    return () => {
      if (mapRef.current) {
        map.setTarget(undefined);
      }
    };
  });

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};
