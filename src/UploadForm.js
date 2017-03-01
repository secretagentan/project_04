import React from 'react';

class UploadForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="upload-form">
      <form action="#">
        <div className="file-field input-field">
          <div className="file-path-wrapper">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="enter image url" />
            <input type="text" placeholder="city, state" />
            <input type="text" placeholder="latitude" />
            <input type="text" placeholder="longitude" />
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
