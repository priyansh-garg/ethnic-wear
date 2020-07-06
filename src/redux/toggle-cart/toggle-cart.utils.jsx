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

export const decreaseItem=(cartItems,itemToDecrease)=>{
    const findItem= cartItems.find(
        item=>item.id===itemToDecrease.id
    )
    if(findItem.quantity===1)
        {
            return cartItems.filter(item=>item.id!==itemToDecrease.id)
        }

        return cartItems.map(
            item=> item.id===itemToDecrease.id? {...item,quantity:item.quantity-1}:item
        )
}