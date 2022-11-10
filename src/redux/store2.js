import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cronoReducer from "./crono/crono.reducer";
import runningReducer from "./running/running.reducer";

const reducer = combineReducers({
    crono: cronoReducer, //crono: {crono: 0}
    running: runningReducer //running: {running: false}
})

const store2 = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store2;