import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Campground_body from "../campground_body/Campground_body";
import React, { useState } from "react";

// function to implement Google Maps API and
const CampgroundMapView = ({
  campgroundLat,
  campgroundLng,
  // campgroundZoom,
}) => {
  // check if locationCoords is null

  console.log(
    campgroundLat, 
    campgroundLng,
    // campgroundZoom
    );


  const containerStyle = {
    width: "100%",
    height: "85vh",
  };

  const locationCoords = {
    coords: {
      lat: campgroundLat,
      lng: campgroundLng,
    },

    zoom: 6
    // campgroundZoom,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  console.log();

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={locationCoords.zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      center={locationCoords.coords}
      streetViewControl={false}
    >
      <Marker position={locationCoords.coords} />
    </GoogleMap>
  ) : (
    <></>
  );

  return <div> Map PlaceHolder</div>;
};

export default React.memo(CampgroundMapView);
