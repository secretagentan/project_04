import React, { Component } from 'react';

const LA_ARTS_DIST_POS = {
  lat: 34.0463342,
  lng: -118.2352291
};


class Map extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: LA_ARTS_DIST_POS,
      zoom: 17
    });
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: 600
    };

    return (
      <div>
        <div className="map" ref="map" style={mapStyle}>Map goes here</div>
      </div>
    );
  }
}

export default Map;
