/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

export default (props) => (
  <div className="content">
    <h2>{props.name.first} {props.name.last}</h2>
    <img src={props.img} alt={props.name.first} />
    <div className="info">
      <div className="data">
        <span>E-mail</span> <span>{props.email}</span>
      </div>
      <div className="data">
        <span>Phone</span> <span>{props.phone}</span>
      </div>
      <div className="data">
        <span>Street</span> <span> {props.location.street.name} {props.location.street.number}</span>
      </div>
      <div className="data">
        <span>City</span> <span> {props.location.city}</span>
      </div>
      <div className="data">
        <span>State</span> <span>{props.location.state}</span>
      </div>
      <div className="data">
        <span>ZIP/Postal Code</span> <span>{props.location.postcode}</span>
      </div>
    </div>
  </div>
);
