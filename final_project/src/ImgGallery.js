import React from 'react';

class ImgGallery extends React.Component {
  constructor() {
    super();
  }

  renderGallery() {


  }

  render() {
    return (
      <div className="gallery">
        <img className="gallery-img" src='http://i.imgur.com/CrEk1Q3.jpg' alt="img1" />
        <p>posted by: secretagentan</p>
        <p>location: los angeles, ca</p>
        <p>lat: 34.046202</p>
        <p>long: -118.2379302</p>
        <br/><br/>
        <img className="gallery-img" src='http://i.imgur.com/p7ocU8O.jpg' alt="img2" />
        <p>posted by: antheman</p>
        <p>location: los angeles, ca</p>
        <p>lat: 34.045626</p>
        <p>long: -118.2371662</p>
        <br/><br/>
        <img className="gallery-img" src='http://i.imgur.com/K2Wboi8.jpg' alt="img3" />
        <p>posted by: agentxhippo</p>
        <p>location: los angeles, ca</p>
        <p>lat: 34.045626</p>
        <p>long: -118.2371662</p>
      </div>
    );
  }
};

export default ImgGallery;
