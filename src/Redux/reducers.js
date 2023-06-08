const initialState = {
    userDetails: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DETAILS':
        return {
          ...state,
          userDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  