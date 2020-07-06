import React from "react";
import "./collection-item.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { connect } from "react-redux";
import {addItem} from "../../redux/toggle-cart/toggle-cart.action";
const CollectionItem=(({item,addItem})=>{
    const {name,price,imageUrl}=item;
    return(
        <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            
            <span className="price"> Rs {price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
        </div>
)});

const mapDispatchToProps=dispatch=>(
    {
        addItem: (item)=>dispatch(addItem(item))
    }
)

export default connect(null,mapDispatchToProps)(CollectionItem);