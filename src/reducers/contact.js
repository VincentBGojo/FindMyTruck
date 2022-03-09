import { CHANGE_VALUES, SEND_MESSAGE } from 'src/actions/contact';

// set the initial state
export const initialState = {
    nameContact: '',
    emailContact: '',
    objectContact: '',
    messageContact: '',
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUES:
      return {
        ...state,
        [action.key]: action.value
      }
    case SEND_MESSAGE:
      // the new state will have the new values (action.value)
      return {
        ...state,
        nameContact: '',
        emailContact: '',
        objectContact: '',
        messageContact: '',
      }
    default:
      return state;
  }
};

export default reducer;
