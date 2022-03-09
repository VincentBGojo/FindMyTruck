import { TYPE_VALUES, UPDATE_INFORMATIONS, SHOW_MODIFY_INFORMATIONS, HIDE_MODIFY_INFORMATIONS } from 'src/actions/profil';

// const data = JSON.parse(sessionStorage.getItem('key'));
// const informations = data.data;
// const informationsFoodtruck = informations.user_foodtruck;


// set the initial state

export const initialState = {
  nicknameProfil: '',
  emailProfil: '',
  firstnameProfil: '',
  lastnameProfil: '',
  streetProfil: '',
  cityProfil: '',
  postalCodeProfil: '',
  warning:false,
  modify:false,
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_VALUES:
      return {
        ...state,
        [action.key]: action.value
      }
    case UPDATE_INFORMATIONS:
      const data = JSON.parse(sessionStorage.getItem('key'));
      const informations = data.data;
      const informationsFoodtruck = informations.user_foodtruck;
      
      // console.log(informationsFoodtruck);
      // the new state will have the new values (action.value)
      return {
        ...state,
      nicknameProfil: informations.nickname,
      emailProfil: informations.email,
      firstnameProfil: informations.firstname,
      lastnameProfil: informations.lastname,
      streetProfil: informationsFoodtruck.street,
      cityProfil: informationsFoodtruck.city,
      postalCodeProfil: informationsFoodtruck.postal_code,
      warning:true,
      }

    case SHOW_MODIFY_INFORMATIONS:
      // the new state will have the new values (action.value)
      return {
        ...state,
        modify: true,
      }

      case HIDE_MODIFY_INFORMATIONS:
      // the new state will have the new values (action.value)
      return {
        ...state,
        modify: false,
      }
    default:
      return state;
    }
};

export default reducer;
