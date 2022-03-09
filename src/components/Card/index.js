import React from 'react';
import { Link } from 'react-router-dom';
import { CgPin } from 'react-icons/cg';


import './style.scss';

const Card = ({
  id,
  name,
  category,
  picture,
  slug,
  city,
  postal_code,
  payment,
  street,
  phone,
}) => {
    
  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';

  const categoryName = category.name
  const pictureURL = baseURL+`${picture}`;

  return(
    <>
    <section className="card_foodtruck">
      <img 
        className="card_foodtruck_img"
        src={pictureURL} 
        // src={thumbnail} 
        alt={slug}  
      />
      <div className="card_foodtruck_content">
        <p className="card_foodtruck_content_title">{name}</p>
        <div className="card_foodtruck_content_subtitle">
          <p className="card_foodtruck_content_category">{categoryName}</p>
          <p className="card_foodtruck_content_rating"></p>
        </div>
        <div className="card_foodtruck_content_description">
          <CgPin />
          <p>{street}</p>
          <p>{city}</p>
          <p>{postal_code}</p>
          <p>{payment}</p>
          <p>{phone}</p>
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

export default Card;
