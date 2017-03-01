import React from 'react';

class BgImg extends React.Component {
  constructor() {
    super();
  }

  render() {
    const bgStyle = {
      backgroundImage: 'url("http://i.imgur.com/aB5kI5J.jpg")',
      zIndex: 100
    }

    return (
      <div style={bgStyle}>
      </div>
    );
  }
};

export default BgImg;
