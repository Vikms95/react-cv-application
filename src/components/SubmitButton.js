import React from 'react';

function SubmitButton(props) {
  const { handleClick } = props;
  return (
    <button type="button" className="create--button" onClick={handleClick}>
      {' '}
      Preview CV
      {' '}
    </button>
  );
}

export default SubmitButton;
