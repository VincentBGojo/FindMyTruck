import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
// import Result from 'src/components/Result';


import Result from 'src/components/Result';
import TypeWriter_search from 'src/components/Typewriter/typewriter_search';


import './style.scss';
import {FiTruck} from 'react-icons/fi';


const SearchBar = () => {

  const address = useSelector(state => state.user.address);
  const addressvalue = useSelector(state => state.user.address.value);

  // const search = useSelector(state =>state.foodtruck.search);
  const dispatch = useDispatch();

  useEffect(() => {

      if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser');
      } else {
        console.log('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
              
          dispatch({
              type: 'SAVE_LAT_LNG',
              lat: position.coords.latitude,
              lon: position.coords.longitude
          })

          dispatch({
            type: 'FETCH_FOODTRUCK_ON_LOAD',
          })
          
          
      }, () => {
        console.log('Unable to retrieve your location');
      });
      }

  }, []);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FETCH_FOODTRUCK',
    });

  }

  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      key: 'address',
      value: event.target.value
    })
    
  }
  
  return (
  <>
    {/* SearchBar Zone */}
    <div className="searchBar">
      <form className="searchBar_form" onSubmit={handleSubmit} >

        {/* Search Text Zone */}
        <div className="searchBar_text">
          <input 
            type="text" 
            onChange={handleChange} 
            value={address} required="required"
          />
          <span>
            <FiTruck />     
            <TypeWriter_search />
          </span>
        </div>

        {/* Search Button Zone */}
        <NavLink 
          to="/resultat"
          exact
        >

        {/* <div id="searchBar_button">
          
          <button type="submit">
            <div id="searchBar_button_circle"></div>
            <span></span>
          </button>
        </div> */}

        </NavLink>
        
        <input 
        className="searchBar_button"
        value="GO" 
        type="submit">
        
        </input>

      </form> 

    </div>
      <Result />
   
  </>
  );
}

export default SearchBar
