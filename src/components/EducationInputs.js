/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class EducationInputs extends React.Component {
  componentDidMount() {
    const button = document.querySelector('button.education');

    if (button.hasAttribute('id-to-edit')) {
      button.textContent = 'Edit education';
    }

    if (!button.hasAttribute('id-to-edit')) {
      button.textContent = 'Add education';
    }
  }

  componentDidUpdate() {
    const button = document.querySelector('button.education');

    if (button.hasAttribute('id-to-edit')) {
      button.textContent = 'Edit education';
    }

    if (!button.hasAttribute('id-to-edit')) {
      button.textContent = 'Add education';
    }
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      values,
    } = this.props;

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
        />
      </form>
    );
  }
}

export default EducationInputs;
