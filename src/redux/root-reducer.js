
import userReducer from "./user/user.reducer";

import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import cartReducer from "./toggle-cart/toggle-cart.reducer";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directory.reducer";
import shopDataReducer from "./shop/shop.reducer";


const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
};

const rootReducer= combineReducers({
   user : userReducer, 
   cart: cartReducer,
   directory: directoryReducer,
   shopData: shopDataReducer
});

export default persistReducer(persistConfig,rootReducer);