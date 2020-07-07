import React from "react";
import "./collections-overview.styles.scss";

import Preview from "../../components/preview-collection/preview-collection.component";

import { connect } from "react-redux";
import { selectShopDataItemsAsArray } from "../../redux/shop/shop.selector";
const CollectionOverview=({collection})=>(
    <div className="collections-overview">
        {
                collection.map(({id,...otherprops})=>(
                    <Preview key={id} {...otherprops}/>
                ))
            }
    </div>
);
const mapStateToProps=state=>({
    collection: selectShopDataItemsAsArray(state)
});
export default connect(mapStateToProps)(CollectionOverview);