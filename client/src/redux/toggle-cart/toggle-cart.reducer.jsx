import { addItemToCart, decreaseItem } from "./toggle-cart.utils";

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
            };
        case "ADD_ITEM":
            return {
                ...state,
                items:addItemToCart(state.items,action.payload)
            };

            case "REMOVE_ITEM":
                return {
                    ...state,
                    items: state.items.filter(item=> item.id!==action.payload.id)
                };
            case "DECREASE_ITEM":
                return{
                    ...state,
                    items: decreaseItem(state.items,action.payload)
                };
                
        default:
            return state;
    }
};

export default cartReducer;