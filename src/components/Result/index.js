import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import SearchBar from 'src/components/SearchBar';
import Foodtruck from 'src/components/Foodtruck';
import Card from 'src/components/Card';
import Map from 'src/components/Map';

import Fake_Card from 'src/components/Card/fake_card';


// import {CgPin} from 'react-icons/cg';


import './style.scss';

const Result = () => {
  
  const foodtrucks = useSelector(state => state.foodtruck.list);
  console.log(foodtrucks);

  return (
<>
  
    {/* <SearchBar /> */}
    <p className="result_title">Résultats de votre recherche</p>
  
  <div className="result">

    <div className="result_map">
      {/* <Map /> */}
    </div>

    <div className="result_cards">
      {foodtrucks.map((foodtruck) => (
        <Card key={foodtruck.id} {...foodtruck}/>
        ))}
        

        {/* <Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /> */}
    </div>

    

  </div>
      {/* {foodtrucks.map((foodtruck) => (
        <Foodtruck key={foodtruck.id} {...foodtruck}/>  
      ))} */}
</>
);
}

export default Result;
