import kurta from "../../images/kurta.jpg";
import kurtajacket from "../../images/kurtajacket.jpg";
import accessories from "../../images/accessoriesfi.jpg";
import sherwani from "../../images/sherwani.jpg";
import indowestern from "../../images/indowestern.jpg";

const INITIAL_STATE={
 sections:   [
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
};
    const directoryReducer=(state=INITIAL_STATE,action)=>{
        switch (action.key) {
           
                
                
            default:
                return state;
        };
    };



export default directoryReducer;