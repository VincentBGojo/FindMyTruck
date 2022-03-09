// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant


const ContactFieldTextarea = ({
  value,
  type,
  name,
  placeholder,
  onFieldContactChange,
  required,
  
}) => {
  const handleChange = (evt) => {
    onFieldContactChange(name, evt.target.value);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      {/* <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label> */}
      
      <textarea
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input-textarea"
        placeholder={placeholder}
        name={name}
        required='required'
      />


    </div>
  );
};

ContactFieldTextarea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFieldContactChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ContactFieldTextarea.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default ContactFieldTextarea;
