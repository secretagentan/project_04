import React from 'react';

const mapCenter = {
  lat: 34.0463342,
  lng: -118.2352291
};


class Map extends React.Component {

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: mapCenter,
      zoom: 17
    });
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '94vh'
    };

    return (
      <div>
        <div className="map" ref="map" style={mapStyle}>
          Loading map...
        </div>
      </div>
      );
  }
}

export default Map;
