import React from "react";
import "./collection-item.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component";

const CollectionItem=(({id,name,imageUrl,price})=>(
        <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            
            <span className="price"> Rs {price}</span>
        </div>

        </div>
));

export default CollectionItem;