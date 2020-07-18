export const toggleCart=()=>({
    type:"TOGGLE_CART"
});

export const addItem=item=>(
    {
        type:"ADD_ITEM",
        payload:item
    }
);

export const RemoveItem=item=>(
{
    type:"REMOVE_ITEM",
    payload:item
}
);


export const DecreaseItem=item=>({
    type:"DECREASE_ITEM",
    payload:item
});