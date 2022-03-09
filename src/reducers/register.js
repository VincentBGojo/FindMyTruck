import { CHANGE_VALUE_REGISTER, REGISTER } from 'src/actions/register';

// set the initial state
export const initialState = {
    nameRegister: '',
    emailRegister: '',
    passwordRegister: '',
    verifPasswordRegister: '',
    registered: false,
    role: '0',
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_REGISTER:
      return {
        ...state,
        [action.key]: action.value
      }
    case REGISTER:
      // the new state will have the new values (action.value)
      return {
        ...state,
        nameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        verifPasswordRegister: '',
        registered: true,
        role: '',
        // checked : false,
      }
    default:
      return state;
  }
};

export default reducer;

