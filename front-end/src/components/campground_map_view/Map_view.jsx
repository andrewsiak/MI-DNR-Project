import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Campground_body from "../campground_body/Campground_body";
import React, { useState } from "react";

// function to implement Google Maps API and
const CampgroundMapView = ({
  campgroundLat,
  campgroundLng,
  campgroundZoom,
}) => {
  // const [locationCoords, setLocationCoords] = useState({
  //   lat: 45.0,
  //   lng: -85.5
  // });
  // or have a default lat and lng
  // check if locationCoords is null

  console.log(campgroundLat, campgroundLng, campgroundZoom);

  const containerStyle = {
    width: "100%",
    height: "90vh",
  };

  // function currentLocation(campgroundLat, campgorundLng) {

  // }

  // if (campgroundLat !== null) {
  const locationCoords = {
    coords: {
      lat: campgroundLat,
      lng: campgroundLng,
    },

    zoom: campgroundZoom,
  };

  // } else {
  //   const currentLocation = {
  // coords: {
  //   lat: 45.0,
  //   lng: -85.5
  // },

  //     zoom: 6,
  //   };
  // }
  // setLocationCoords(defaultLocation)

  // locationCoords.defaultProps = {
  //   campgroundLat: 45.00,
  //   campgroundLng: -85.50,
  // };
  // console.log(campgroundLat, campgroundLng);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  console.log();

  //   let currentLocation = {
  //     coords: {
  //       lat: campgroundLat,
  //       lng: campgroundLng,
  //     },
  //     zoom: 11,

  // }
  // setLocationCoords(currentLocation)

  // if (!isLoaded) {
  //   return <SkeletonText />
  // }

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center.coords);
    // map.fitBounds(bounds);

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

      {/* {campground.isMarkerShown && (
      )} */}

      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <></>
  );

  return <div> Map PlaceHolder</div>;
};

export default React.memo(CampgroundMapView);
