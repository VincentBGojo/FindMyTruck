import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import Map from 'src/components/Map';
import Result from 'src/components/Result';
import React, { useState } from 'react';


import './style.scss';

const Home = () => { 
  // window.onunload = function () {
  //   sessionStorage.clear();
  // }

  return (
    <div className="home">
    <SearchBar /> 
    <div className="test">
    {/* <Map /> */}
    </div>  
    </div>
  )
};

export default Home;
