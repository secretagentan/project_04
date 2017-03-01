import React from 'react';

class UploadForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <form action="#">
        <div className="file-field input-field">
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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
