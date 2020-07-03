import React from "react";
import data from "../../collection.data";
import Preview from "../../components/preview-collection/preview-collection.component";
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collection: data
        }
    }
    render(){
        const {collection}=this.state;
        return(
            <div className="shop-page">
            {
                collection.map(({id,...otherprops})=>(
                    <Preview key={id} {...otherprops}/>
                ))
            }

            </div>
        );
    }
}

export default Shop;