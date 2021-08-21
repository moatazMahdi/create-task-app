// Initial State
const initialState = {
    firstname:'',
    lastname:'',
    phonenumber:'',
    saconderyphonenumber:'',
  };
  
// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case 'FIRST_NAME': {
      return {
        // State
        ...state,
        // Redux Store
        firstname: action.payload,
      }
    }

    // Decrease Counter
    case 'LAST_NAME': {
      return {
        // State
        ...state,
        // Redux Store
        lastname: action.payload,
      }
    }
    case 'PHONE_NUMBER': {
      return {
        // State
        ...state,
        // Redux Store
        phonenumber: action.payload,
      }
    }
    case 'SACONDERY_PHONE_NUMBER': {
      return {
        // State
        ...state,
        // Redux Store
        saconderyphonenumber: action.payload,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;