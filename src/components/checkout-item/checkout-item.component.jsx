import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { RemoveItem, DecreaseItem, addItem } from "../../redux/toggle-cart/toggle-cart.action";

const CheckoutItem=({item,removeItem,DecreaseItem,addItem})=>{
    
    const {name,imageUrl,quantity,price}=item;

    
    return (
    <div className="checkout-item">
    <div className='image-container'>
        <img alt="item" src={imageUrl}/>
    </div>
    <span className="name">{name}</span>
    
    <span className="quantity">
    <span className="arrow" onClick={()=>DecreaseItem(item)}>&#10094;</span>
    <span className="value">{quantity}</span>
    <span className="arrow" onClick={()=>addItem(item)}>&#10095;</span>
    </span>
    <span className="price">{price}</span>
    
    <span className="remove-button" onClick={()=>removeItem(item)}>&#10005;</span>
    </div>
)};

const mapDispatchToProps=dispatch=>(
{
    removeItem: item=>dispatch(RemoveItem(item)),
    DecreaseItem: item=>dispatch(DecreaseItem(item)),
    addItem: item=>dispatch(addItem(item))
}
);

export default connect(null,mapDispatchToProps)(CheckoutItem);