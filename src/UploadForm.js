import React from 'react';


class UploadForm extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      username: '',
      note: '',
      lat: '',
      lng: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const url = 'http://localhost:8080/places';
    fetch(url, {
      method: 'POST',
      body: this.state
    }).then(function(res) {
      console.log(res);
    }).catch(function(err) {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="upload-form">
        <form action="/places" method="post" onSubmit={this.handleSubmit}>
          <div className="file-field input-field">
            <div className="file-path-wrapper">
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
              <input type="text" name="imgUrl" placeholder="image url" value={this.state.imgUrl} onChange={this.handleChange} />
              <input type="text" name="note" placeholder="city, state" value={this.state.note} onChange={this.handleChange} />
              <input type="text" name="lat" placeholder="latitude" value={this.state.lat} onChange={this.handleChange} />
              <input type="text" name="lng" placeholder="longitude" value={this.state.lng} onChange={this.handleChange} />
              <button className="btn right waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    );
  }
};

export default UploadForm;
