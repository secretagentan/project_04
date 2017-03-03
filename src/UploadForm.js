import React from 'react';

class UploadForm extends React.Component {
  constructor() {
    super();
    this.state = {
      img_url: '',
      created_by: '',
      note: '',
      lat: '',
      lng: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const setValue = event.target.value;
    this.setState({
      [name]: setValue
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createPlace();
  }

  createPlace() {
    const url = 'http://localhost:3000/places';
    const data = {
      place: this.state
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then( res => res.json() ).then(console.log);
  }
  render() {
    return (
      <div className="upload-form">
        <form action="/places" method="post" onSubmit={this.handleSubmit}>
          <div className="file-field input-field">
            <div className="file-path-wrapper">
              <input type="text" name="created_by" placeholder="created_by" onChange={this.handleChange} />
              <input type="text" name="img_url" placeholder="image url" onChange={this.handleChange} />
              <input type="text" name="note" placeholder="city, state" onChange={this.handleChange} />
              <input type="text" name="lat" placeholder="latitude" onChange={this.handleChange} />
              <input type="text" name="lng" placeholder="longitude" onChange={this.handleChange} />
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
