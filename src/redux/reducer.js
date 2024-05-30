


const initialState = {
  isActive: true
};


const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATESTATUS":
      return {
        isActive: !state.isActive 
      };
    
      
    default:
      return state;
  }
};

export default counterReducer;
