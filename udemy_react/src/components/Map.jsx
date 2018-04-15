import React, { PropTypes } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const InnerMap = withGoogleMap(({ location, marker }) => {
  console.log(marker)

  return (
    <GoogleMap defaultZoom={12} defaultCenter={location} center={location}>
      <Marker {...marker} />
      {/*<Marker {...location} /> =イコール= <Marker location={location} /> */}
    </GoogleMap>
  )
})

const Map = ({ location }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    location={location}
    marker={{ position: location }} // { position: position } となるので { position } と省略できる
  />
)

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Map
