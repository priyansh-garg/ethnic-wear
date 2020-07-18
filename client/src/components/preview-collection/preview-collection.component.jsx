import React from "react";

import "./preview-collection.styles.scss";
import Item from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview=({title,items,routeName,history})=>(
        <div className="collection-preview">
    <h1 className="title" onClick={()=>history.push(`${routeName}`)}>{title.toUpperCase()}</h1>
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

export default withRouter(CollectionPreview);