import React from 'react';
import { username, city } from '../data/user';

const Home = () => {
  return (
    <div>
      
      <p>Username: {username}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Home;