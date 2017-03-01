import React from 'react';

class ImgGallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="gallery">
        <img className="gallery-img" src='http://i.imgur.com/p7ocU8O.jpg' alt="img2" />
        <p>posted by: antheman</p>
        <p>location: los angeles, ca</p>
        <p>lat: 34.046202</p>
        <p>long: -118.2379302</p>
      </div>
    );
  }
};

export default ImgGallery;
