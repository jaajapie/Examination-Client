import React from "react";
import { Config } from "../src/config";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  KmlLayer,
} from "react-google-maps";

const defaultCenter = { lat: 36.157055, lng: -86.7696144 };

const defaultOptions = { scrollwheel: false };
const markers = [
  {
    lat: 36.157055,
    lng: -86.7696144,
  },
  // {
  //   lat: 36.1521981,
  //   lng: -86.7801724,
  // },
  // {
  //   lat: 36.1577547,
  //   lng: -86.7785841,
  // },
  // {
  //   lat: 36.1400674,
  //   lng: -86.8382887,
  // },
  // {
  //   lat: 36.1059131,
  //   lng: -86.7906082,
  // },
];

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
      <KmlLayer
        url="https://dl.dropboxusercontent.com/s/wngutx8ph89bygt/region_data.kml?dl=0"
        options={{ preserveViewport: true }}
      />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };
const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${Config.googlemapKey}&libraries=geometry,drawing,places`;

const polygon = () => {
  return (
    <>
      <RegularMap
        style={{ minHeight: "300px" }}
        googleMapURL={mapUrl}
        loadingElement={<div style={loadingElementStyle} />}
        containerElement={<div style={containerElementStyle} />}
        mapElement={<div style={mapElementStyle} />}
      />
    </>
  );
};

export default polygon;
