
import userReducer from "./user/user.reducer";

import {combineReducers} from "redux";
import cartReducer from "./toggle-cart/toggle-cart.reducer";




export default combineReducers({
   user : userReducer, 
   cart: cartReducer
});