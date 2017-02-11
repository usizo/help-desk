import React, { Component } from 'react';
import Table from './Table.jsx';
import Btn from './Btn.jsx';

const Main = ({ handleOption, handleChange, handleSubmit, users, user1info, user2info }) => {
  return (
    <div className="main">
      <Table handleOption={handleOption} handleChange={handleChange} users={users} user1info={user1info} user2info={user2info} />
      <Btn handleSubmit={handleSubmit} />
    </div>
  );
};

export default Main;
