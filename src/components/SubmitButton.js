import React from 'react';

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" className="create--button" onClick={handleClick}>
        {' '}
        Preview CV
        {' '}
      </button>
    );
  }
}

export default SubmitButton;
