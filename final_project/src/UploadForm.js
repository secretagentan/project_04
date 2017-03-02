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
  }

  handleSubmit() {



  }

  render() {
    return (
      <div className="upload-form">
        <form action="/places" method="post" onSubmit={this.handleSubmit}>
          <div className="file-field input-field">
            <div className="file-path-wrapper">
              <input type="text" name="username" placeholder="username" />
              <input type="text" name="imgUrl" placeholder="enter image url" />
              <input type="text" name="city" placeholder="city, state" />
              <input type="text" name="lat" placeholder="latitude" />
              <input type="text" name="lng" placeholder="longitude" />
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
