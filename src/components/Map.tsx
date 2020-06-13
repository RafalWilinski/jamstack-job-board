import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapPin } from "./icons/MapPin"
import { useGeolocation }from "../hooks/useGeolocation"

interface MapProps {}

const MapComponent: React.FC <MapProps> = (props: MapProps) => {
  const location = useGeolocation();

  return (
    <Map style={{ height: 300 }} center={[location.latitude, location.longitude]} zoom={location.zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy;{" "} <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        { location.haveLocation ?
          <Marker position={[location.latitude, location.longitude]} icon={mapPin}>
            <Popup> Hello! </Popup>
          </Marker> : '' }
    </Map>
  )
}

export  default MapComponent
