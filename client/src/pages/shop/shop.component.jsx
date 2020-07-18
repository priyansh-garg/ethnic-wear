import React from "react";


import CollectionsOverviewComponent from "../../components/collection-overview/collections-overview.component";
import {  Route } from "react-router-dom";
import Category from "../category/category.component";
const  Shop=({match})=> {
    console.log(match);
    
    return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
            <Route path={`${match.path}/:CategoryId`} component={Category}/>
            </div>
        )};


export default Shop;