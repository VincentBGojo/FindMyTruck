import { CHANGE_VALUE, LOGIN } from 'src/actions/users';

// set the initial state
export const initialState = {
    logged: false,
    email: '',
    password: '',
    nickname: '',
    token: '',
    address: '',
    lat: '',
    lon: '',
    
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      }
    case LOGIN:
      // the new state will have the new values (action.value)
      return {
        ...state,
        logged: true,
        password: '',
        email: '',
        nickname: action.nickname,
        token: action.token,
      }
    case 'SAVE_LAT_LNG': 
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      }
      case 'LOGOUT':
        return {
          ...state,
          logged: false,
          nickname: '',
          token: '',
        };
    default:
      return state;
  }
};

export default reducer;

// const pseudo = useSelector((state) => state.user.pseudo);
