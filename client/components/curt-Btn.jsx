import React, { Component } from 'react';

const Btn = ({ handleSubmit }) => {
  return (
    <div className="btn">
      <button className="myButton" onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
};

export default Btn;
