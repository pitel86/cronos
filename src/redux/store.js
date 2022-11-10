import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const initialState = {
    crono: 0,
    running: false,
  };
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "start":
        return { ...state, running: true };
      case "stop":
        return { ...state, running: false };
      case "resume":
        return { ...state, running: true };
      case "reset":
        return { ...state, crono: 0 };
      case "addTime":
          return {...state, crono: state.crono + action.payload}
      
      default:
        return state;
    }
};
  
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;