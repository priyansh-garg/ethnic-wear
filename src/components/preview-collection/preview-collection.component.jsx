import React from "react";

import "./preview-collection.styles.scss";
import Item from "../collection-item/collection-item.component";

const CollectionPreview=({title,items})=>(
        <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter((item,ind)=> ind<4)
            .map((item)=>(
                <Item key={item.id} item={item} />
            ))
        }
    </div>
        </div>
);

export default CollectionPreview;