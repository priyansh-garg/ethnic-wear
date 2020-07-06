import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, total } from "../../redux/toggle-cart/cart.selectors";
import CheckoutItem from "../checkout-item/checkout-item.component";

const Checkout=({cartItems,total})=>(
    <div class="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(item=>(
            <CheckoutItem key={item.id } item={item} />
        ))
    }
    <div className="total">
    <span>TOTAL : {total}</span>

    </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: total
});
export default connect(mapStateToProps)(Checkout);