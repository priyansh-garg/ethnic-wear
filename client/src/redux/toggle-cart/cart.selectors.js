import {createSelector} from "reselect";

const selectCart= state=>state.cart;

export const selectCartItems= createSelector(
  [selectCart],
  cart=>cart.items  
);

export const cartItemsCount= createSelector(
    [selectCartItems],
    (items)=>{
     return   items.reduce((sum,item)=>sum+item.quantity,0)
    }
);

export const selectCartHidden= createSelector(
    [selectCart],
    (cart)=>cart.hidden
);

export const total= createSelector(
    [selectCartItems],
    (items)=>{
     return   items.reduce((sum,item)=>sum+item.quantity*item.price,0)
    }
);