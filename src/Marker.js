// import React from 'react';

// class MyMarkers extends React.Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     let marker = new google.maps.Marker({
//       position: mapCenter,
//       map: map
//     })
//   }

//   componentDidUpdate(prevProps) {
//     if( (this.props.map !== prevProps.map) || (this.props.position !== prevProps.position) ) {
//       this.renderMarker();
//     }
//   }

//   renderMarker() {
//     let {
//       map, google, position, mapCenter
//     } = this.props;

//     let pos = position || mapCenter;
//     position = new google.maps.LatLng(pos.lat, pos.lng);

//     const pref = {
//       map: map,
//       position: position
//     }
//     this.marker = new google.maps.Marker(pref);
//   }

//   render() {
//     return null;
//   }
// }

// Marker.propTypes = {
//   position: React.PropTypes.object,
//   map: React.PropTypes.object
// }

// export default MyMarkers;
