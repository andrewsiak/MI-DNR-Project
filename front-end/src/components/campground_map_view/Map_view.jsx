import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Campground_body from "../campground_body/Campground_body";
import React, { useState } from "react";

// function to implement Google Maps API and
const CampgroundMapView = ({ campgroundLat, campgroundLng }) => {
  // const [locationCoords, setLocationCoords] = useState(null);
  // or have a default lat and lng 
  // check if locationCoords is null

  console.log(campgroundLat, campgroundLng);

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

    zoom: 11,
  };


  // } else {
  //   const currentLocation = {
  //     coords: {
  //       lat: 45.0,
  //       lng: -85.5
  //     },

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
      {/* {campground.isMarkerShown && (
        <Marker position={{ lat: campgroundLat, lng: campgorundLng }} />
      )} */}

      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <></>
  );

  return <div> Map PlaceHolder</div>;
};

export default React.memo(CampgroundMapView);

// function Map(props) {
//   const { latitude, longitude } = useSelector(state => state.location);
//   const [current, setCurrent] = React.useState({ lat: 42.360081, lng: 7.665440 });

//   return (
//       <GoogleMap defaultZoom={4}
//           defaultCenter={{ lat: (latitude ? latitude : current.lat), lng: (longitude ? longitude : current.lng) }}
//       >
//           {props.isMarkerShown && <Marker position={{ lat: (latitude ? latitude : current.lat), lng: (longitude ? longitude : current.lng) }} />}
//       </GoogleMap>
//   )
// }

// googleMapScript.addEventListener("load", () => {
//   setGoogleMap(createGoogleMap());
// });

// ...

// let createGoogleMap = () => {
//   const map = new window.google.maps.Map(googleMapRef.current, {
//       zoom: 16,
//       center: {
//           lat: 43.642567,
//           lng: -79.387054,
//       },
//       // disableDefaultUI: true,
//   });

//   setMarker(createMarker(map));
// }

// let createMarker = (map) => {
//   const marker = new window.google.maps.Marker({
//       position: { lat: 43.642567, lng: -79.387054 },
//       map: map,
//   })
//   return marker
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// const App = () => {
//   return (
//       <WrappedMap
//           isMarkerShown={true}
//           googleMapURL={`https://maps.google.com/maps/api/js?key=[API_KEY]-e2c2H2jAcFw`}
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `75vh` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//       />
//   )
// }

// export default App;
