import React from 'react';
import { Link } from 'react-router-dom';
// import { CgPin } from 'react-icons/cg';


import './style.scss';

const Fake_Card = ({}) => {
    
  
  return(
    <>
    <section className="card_foodtruck">
      <img 
        className="card_foodtruck_img"

      />
      <div className="card_foodtruck_content">
        <p className="card_foodtruck_content_title">NOM DU FOODTRUCK</p>
        <div className="card_foodtruck_content_subtitle">
          <p className="card_foodtruck_content_category">catégorie</p>
          <p className="card_foodtruck_content_rating"></p>
        </div>
        <div className="card_foodtruck_content_description">
          <div className="card_foodtruck_content_description_adress">
            {/* <CgPin />  */}
            <p className="card_foodtruck_content_description_adress_street">Rue</p>
            <p className="card_foodtruck_content_description_adress_postalcode">Code Postal</p>
            <p className="card_foodtruck_content_description_adress_city">Ville</p>
          </div>
          <div className="card_foodtruck_content_description_details">
            <p>Mode de paiement</p>
            <p>Téléphone</p>
          </div>
        </div>
      </div>
    </section>





</>


);
}

// Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };

export default Fake_Card;
