import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import {toggleCart} from "../../redux/toggle-cart/toggle-cart.action";

 const CartIcon = ({toggleCart,itemCount})=>(
    <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span> 
     </div>
);

const mapDispatchToProps=dispatch=>({
    toggleCart: ()=> dispatch(toggleCart())
});

const mapStateToProps= state=>(
    {
        itemCount: state.cart.items.reduce(
            (sum,item)=>sum+item.quantity,0
        )
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);