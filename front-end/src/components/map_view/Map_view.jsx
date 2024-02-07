import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 45.001,
  lng: -86.270
};

function googleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  if (!isLoaded) {
    return <SkeletonText />
  }

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Box>
      
        <GoogleMap
      
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>

    </Box>
  ) : <></>
}

export default googleMapView
