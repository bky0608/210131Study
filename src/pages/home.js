import React from 'react';
import Logo from '../components/home/logo';
import Navbar from '../components/home/navbar';
import SearchBar from '../components/home/search-bar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
