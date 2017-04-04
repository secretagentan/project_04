import React from 'react';

class ImgGallery extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'https://afternoon-plains-60826.herokuapp.com/places';
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        this.setState({
          data: data
        });
        console.log('state.data in then ',this.state.data);
      })
  }

  render() {
    const data = this.state.data;
    const results = data.map( (dat, index) => <GalleryPost key={index} data={dat} />)

    return (
      <div className="gallery">
        {results}
      </div>
    );
  }

};

class GalleryPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props
    }
  }

  render() {
    return (
      <div>
        <img className="gallery-img" src={this.props.data.img_url} alt="img-test" />
        <p>posted by: {this.props.data.created_by}</p>
        <p>location: {this.props.data.note}</p>
        <p>lat: {this.props.data.lat}</p>
        <p>long: {this.props.data.lng}</p>
        <br/>
        <br/>
      </div>
    );
  }
}

export default ImgGallery;
