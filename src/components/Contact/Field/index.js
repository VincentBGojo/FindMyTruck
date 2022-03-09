// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const ContactField = ({
  form,
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
  const className = `${form}_field_input`;


  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        className={className}
        required='required'

        name={name}
      />

      {/* <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label> */}
    </div>
  );
};

ContactField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFieldContactChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ContactField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default ContactField;
