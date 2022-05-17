import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      isEditorMode, toggleMode, createPDF, printCV,
    } = this.props;
    return (
      <div className="header">
        <h2 className="title">
          {' '}
          Resu
          <span className="make--title">Make</span>
        </h2>
        {!isEditorMode && (
        <div className="header--buttons">
          <button type="button" onClick={toggleMode} className="edit--button--bottom">
            {' '}
            Back to edit
          </button>

          <button type="button" onClick={createPDF} className="pdf--button--bottom">
            {' '}
            Download PDF
          </button>
          <button type="button" onClick={printCV} className="print--button--bottom">
            {' '}
            Print CV
          </button>
        </div>
        )}
      </div>
    );
  }
}

export default Header;
