/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

function EducationInputs(props) {
  const [buttonTextContent, setButtonTextContent] = useState('Add education');
  const button = document.querySelector('button.education');

  useEffect(() => {
    setButtonTextContent((prevButtonTextContent) => (
      (prevButtonTextContent === 'Add education')
        ? 'Edit education'
        : 'Add education'
    ));
  }, [button.attributes]);

  const {
    handleChange,
    handleSubmit,
    values,
  } = props;

  const {
    title,
    university,
    observations,
  } = values;

  return (
    <form className="container--input" id="education">
      <section>
        <label htmlFor="title"> Title obtained </label>

        <input
          className="title--input"
          type="text"
          id="title"
          name="education"
          minLength="2"
          onChange={handleChange}
          value={title || ''}
        />
      </section>

      <section>
        <label htmlFor="university"> University </label>

        <input
          className="university--input"
          type="text"
          id="university"
          name="education"
          minLength="2"
          onChange={handleChange}
          value={university || ''}
        />
      </section>

      <section className="observations--container">
        <label htmlFor="observations"> Observations </label>

        <textarea
          className="observations--input"
          type="text"
          id="observations"
          name="education"
          onChange={handleChange}
          value={observations || ''}
        />
      </section>

      <button
        onClick={handleSubmit}
        type="button"
        className="education"
      >
        {buttonTextContent}
      </button>
    </form>
  );
}

export default EducationInputs;
