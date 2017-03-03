import React from 'react';

class ImgGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    // this.retrieveData = this.retrieveData.bind(this);
  }

  componentDidMount() {
    // function retrieveData() {
      const url = 'http://localhost:3000/places';
      fetch(url)
        .then( res => res.json() )
        .then( data => {
          this.setState({
            data: data
          });
          console.log('state.data in then ',this.state.data);
        })
    // }
  }



  render() {
    // this.retrieveData();
    const data = this.state.data;
    // console.log(data);
    // const results = data.map( (key, val) => <div key={key}>{val}</div>)

    return (
      <div className="gallery">

        <img className="gallery-img" src={this.state.data} alt="img-test" />
        <p>posted by: {this.props.created_by}</p>
        <p>location: {this.props.note}</p>
        <p>lat: {this.props.lat}</p>
        <p>long: {this.props.lng}</p>

        <br/><br/>
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
