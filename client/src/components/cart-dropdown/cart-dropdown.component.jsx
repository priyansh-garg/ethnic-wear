import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/toggle-cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/toggle-cart/toggle-cart.action";

  const CartDropdown=({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
    <div className="cart-items">
    {   cartItems.length?
        cartItems.map(item=>(
          <CartItem key={item.id} item={item} />
        ))
        :
        <span className="empty"> Your cart is empty</span>

    }
    </div>
    <CustomButton onClick={()=>{history.push("/checkout"); dispatch(toggleCart());}}>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps=(state)=>(
    {
        cartItems:selectCartItems(state)
    }
);

export default withRouter(connect(mapStateToProps)(CartDropdown));