"use client"
import React from 'react';
import RandomItemPicker from '../components/RandomItem';

const items = ['Manwah', 'Topping Beef', 'Hadilao'];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Random Item Picker</h1>
      <RandomItemPicker items={items} />
    </div>
  );
};

export default Home;
