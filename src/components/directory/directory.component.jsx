import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import kurta from "../../images/kurta.jpg";
import kurtajacket from "../../images/kurtajacket.jpg";
import accessories from "../../images/accessoriesfi.jpg";
import sherwani from "../../images/sherwani.jpg";
import indowestern from "../../images/indowestern.jpg";
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            items:[
                {
                    title: 'Kurta Set',
                    imageUrl: `${kurta}`,
                    id: 1,
                    linkUrl: 'shop/kurta'
                  },
                  {
                    title: 'kurta jacket set',
                    imageUrl: `${kurtajacket}`,
                    id: 2,
                    linkUrl: 'shop/kurtajacket'
                  },
                  {
                    title: 'accessories',
                    imageUrl: `${accessories}`,
                    id: 3,
                    linkUrl: 'shop/accessories',
                    size: "banner"
                  },
                  {
                    title: 'Indo-western',
                    imageUrl: `${indowestern}`,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/indowestern'
                  },
                  {
                    title: 'sherwani',
                    imageUrl: `${sherwani}`,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/sherwani'
                  }
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.items.map(({id,...otherprops})=>{
                      return  <MenuItem key={id} {...otherprops} />
                    })
                }
            </div>
            );
    }
}

 export default Directory;