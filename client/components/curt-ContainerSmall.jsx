import React, { Component } from 'react';
import Input from './curt-Input.jsx';
import Btn from './curt-Btn.jsx';

const ContainerSmall = ({ handleChange, handleSubmit }) => {
  return (
    <div className="table">
      <Input handleChange={handleChange} id="username" placeholder="Choose username" />
      <Input handleChange={handleChange} id="password" placeholder="Choose password" />
      <Btn handleSubmit={handleSubmit} />
    </div>
  );
};

export default ContainerSmall;
