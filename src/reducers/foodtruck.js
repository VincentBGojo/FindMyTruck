// import data from 'src/data';

export const initialState = {
    list: [],
    // search: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'SAVE_FOODTRUCKLIST':
        return {
          ...state,
          list: action.foodtruck,
          // search: true,
        }
      default:
        return state;
    }
  };
  
  export default reducer;
