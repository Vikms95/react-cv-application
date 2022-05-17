/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class WorkExperienceInputs extends React.Component {
  componentDidMount() {
    const button = document.querySelector('button.work');
    if (button.hasAttribute('id-to-edit')) {
      button.textContent = 'Edit experience';
    }
    if (!button.hasAttribute('id-to-edit')) {
      button.textContent = 'Add experience';
    }
  }

  componentDidUpdate() {
    const button = document.querySelector('button.work');
    if (button.hasAttribute('id-to-edit')) {
      button.textContent = 'Edit experience';
    }
    if (!button.hasAttribute('id-to-edit')) {
      button.textContent = 'Add experience';
    }
  }

  render() {
    const { values, handleChange, handleSubmit } = this.props;
    const { place, company, observations } = values;

    return (
      <form className="container--input" id="work">
        <section>
          <label htmlFor="place"> Position </label>
          <input
            className="place--input"
            type="text"
            id="place"
            name="work"
            minLength="2"
            onChange={handleChange}
            value={place || ''}
          />
        </section>
        <section>
          <label htmlFor="location"> Company </label>
          <input
            className="company--input"
            type="text"
            id="company"
            name="work"
            minLength="2"
            onChange={handleChange}
            value={company || ''}
          />
        </section>
        <section className="observations--container">
          <label htmlFor="observations"> Observations </label>
          <textarea
            className="observations--input--work"
            type="text"
            id="observations"
            name="work"
            onChange={handleChange}
            value={observations || ''}
          />
        </section>
        <button type="button" onClick={handleSubmit} className="work" />
      </form>
    );
  }
}

export default WorkExperienceInputs;
