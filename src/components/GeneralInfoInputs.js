/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class GeneralInfoInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleChange } = this.props;

    return (
      <form className="general--info--inputs">
        <label htmlFor="name"> Name </label>
        <input
          name="general"
          id="name"
          minLength="2"
          placeholder="John Doe"
          onChange={handleChange}
        />

        <label htmlFor="email"> E-mail </label>
        <input
          name="general"
          id="email"
          type="email"
          minLength="2"
          placeholder="johndoe@gmail.com"
          onChange={handleChange}
        />

        <label htmlFor="phone"> Phone </label>
        <input
          name="general"
          id="phone"
          type="text"
          minLength="5"
          placeholder="+99 123 456 789"
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default GeneralInfoInputs;
