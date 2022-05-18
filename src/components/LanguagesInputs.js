/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function LanguagesInputs(props) {
  const { values, handleSubmit, handleChange } = props;
  const { language, proficiency } = values;

  return (
    <form className="languages--inputs" id="languages">
      <section>
        <label htmlFor="language--name"> Language </label>
        <input
          className="language--input"
          type="text"
          id="language"
          name="languages"
          minLength="2"
          value={language || ''}
          onChange={handleChange}
        />
      </section>

      <section className="languages-bottom">
        <select
          defaultValue="Elementary"
          value={proficiency}
          onChange={handleChange}
          id="proficiency"
          name="languages"
          className="proficiency"
        >
          <option value="Elementary"> Elementary </option>
          <option value="Professional"> Professional </option>
          <option value="Native"> Native </option>
        </select>

        <button type="button" onClick={handleSubmit} className="languages">
          {' '}
          Add language
        </button>
      </section>
    </form>
  );
}

export default LanguagesInputs;
