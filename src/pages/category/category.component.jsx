import React from "react";
import "./category.styles.scss";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";


const Category=({category})=>{
    
    const {title,items}=category;
    return (
  
  <div className="category-page">
    <h2 className="title">{title}</h2>
    <div className="items">
        {
            items.map(item=>(
                <CollectionItem key={item.id} item={item}/>
            ))
        }
    </div>
    </div>
)};
const mapStateToProps=(state,props)=>({
    category: selectCategory(props.match.params.CategoryId)(state)
});
export default connect(mapStateToProps)(Category);