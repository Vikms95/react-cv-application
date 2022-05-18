import React from 'react';

function GeneralInfoView(props) {
  const formatValues = () => Object.values(props).map((value) => (
    <div key={value.name} className="general--info--element">
      <h1 className="name--view">{value.name}</h1>
      <div className="email--view">{value.email}</div>
      <div className="phone--view">{value.phone}</div>
    </div>
  ));

  return <section className="general--info--view">{formatValues()}</section>;
}
export default GeneralInfoView;
