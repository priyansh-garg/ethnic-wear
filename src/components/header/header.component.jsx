import React from "react";
import {Link, withRouter} from "react-router-dom";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.util";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { connect } from "react-redux";
import  CartIcon  from "../cart-icon/cart-icon.component";
import  CartDropdown  from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import { selectCartHidden } from "../../redux/toggle-cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
const Header=({user,hidden,history})=>(
    <div>
   <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
            
        
        </Link>
        <h1 className="brand" onClick={()=>history.push("/")}>Mangal Sherwani</h1>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            
            {
                user?
                <div className="option" onClick={()=>auth.signOut()} >SIGN OUT</div>
                :
                <Link to="/authenticate"> SIGN IN</Link>
            }
            <CartIcon />
            {hidden?
                null:
            <CartDropdown/>
            }
        </div>
        
    </div>
    <div className="mobile-brand">Mangal Sherwani</div>
    </div>
);

const mapStateToProps=createStructuredSelector({
    user:selectCurrentUser,
    hidden:selectCartHidden

});

export default withRouter(connect(mapStateToProps)(Header));