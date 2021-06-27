import {createStore} from "redux";
import rootReducer from "./rootReducer"
import {devToolsEnhancer} from "redux-devtools-extension";

export function configureStore(options){
    return createStore(rootReducer, devToolsEnhancer(options))
}