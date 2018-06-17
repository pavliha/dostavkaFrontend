import React from 'react'
import connector from './connector'

const { compose, withProps, lifecycle } = require('recompose')
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require('react-google-maps')

const MapWithADirectionsRenderer = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap,
  lifecycle({
    componentDidMount() {

      const props = this.props

      debugger
      if (!props.map.to) return null
      if (!props.map.from) return null

      const DirectionsService = new google.maps.DirectionsService()

      DirectionsService.route({
        origin: new google.maps.LatLng(props.map.from.lat, props.map.from.lng),
        destination: new google.maps.LatLng(props.map.to.lat, props.map.to.lng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          })
        } else {
          console.error(`error fetching directions ${result}`)
        }
      })
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

export default connector(MapWithADirectionsRenderer)
