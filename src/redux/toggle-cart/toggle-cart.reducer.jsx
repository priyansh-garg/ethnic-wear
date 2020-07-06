import { addItemToCart } from "./toggle-cart.utils";

const INITIAL_STATE={
    hidden:true,
    items:[]
};

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "TOGGLE_CART":
            
            return{
                ...state,
                hidden: !state.hidden
            }
        case "ADD_ITEM":
            return {
                ...state,
                items:addItemToCart(state.items,action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;