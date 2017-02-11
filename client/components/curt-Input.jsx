import React, { Component } from 'react';

const Input = ({ handleChange, id, placeholder }) => {
  return (
    <div className="input">
      <input type="text" id={id} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
