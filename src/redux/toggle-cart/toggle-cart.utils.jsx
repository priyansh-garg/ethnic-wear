export const addItemToCart=(cartItems,itemToAdd)=>{
    const itemExists= cartItems.find(
        item=> item.id===itemToAdd.id
    )


if(itemExists){
    return cartItems.map(item=>{
        return item.id===itemToAdd.id? {...itemToAdd,quantity:item.quantity+1}: item;
    })
}

return [...cartItems,{...itemToAdd,quantity:1}];
}