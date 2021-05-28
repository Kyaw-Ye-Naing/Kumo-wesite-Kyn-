import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px`,width:`300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultRadius={10}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => { 
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

// import React, { useEffect, useState } from 'react'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


// const ContactMap = props => {
//   const { media } = props;
//   const [showingInfoWindow, setShowingInfoWindow] = useState(false);
//   const [activeMarker, setActiveMarker] = useState({});
//   const [selectedPlace, setSelectedPlace] = useState({});
//   const [pageWidth, setPageWidth] = useState(window.innerWidth)

//   const onMarkerClick = (props, marker, e) => {
//     setSelectedPlace(props);
//     setActiveMarker(marker);
//     setShowingInfoWindow(!showingInfoWindow);
//   };

//   const onMapClicked = props => {
//     if (showingInfoWindow) {
//       setShowingInfoWindow(false);
//       setActiveMarker(null);
//     }
//   };

//   useEffect(() => {
//     window.onresize = (e) => {
//         setPageWidth(e.target.innerWidth)
//     }
// })

//   return (
//     <div className={`${pageWidth < 768 ? 'map-responsive' : ' map-responsive iframe'} px-2 `} style={{ position: "relative", zIndex: 4 }}>
//       <Map
//         google={window.google}
//         zoom={15}
//         style={{ width: "300px", height: "220px", borerRadius: "2%" }}
//         initialCenter={{
//           lat: 21.9426,
//           lng: 96.1078
//         }}
//         // onClick={onMapClicked}
//       >
//         {/* <Marker onClick={onMarkerClick} name={"Kumo Solutions"} /> */}

//         <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
//           <div>
//             <span style={{ fontSize: 20 }}>
//               {selectedPlace.name}
//             </span>
//           </div>
//         </InfoWindow>
//       </Map>
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBgru9d8427Q2J_iNok_8dybJ5HRxxoSw0"
// })(ContactMap);
