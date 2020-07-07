import k01 from "./images/kurtas/k01.jpg";
import k02 from "./images/kurtas/k02.jpg";
import k03 from "./images/kurtas/k03.jpg";
import k04 from "./images/kurtas/k04.jpg";
import k05 from "./images/kurtas/k05.jpg";
import k06 from "./images/kurtas/k06.jpg";
import k07 from "./images/kurtas/k07.jpg";
import k08 from "./images/kurtas/k08.jpg";
import k09 from "./images/kurtas/k09.jpg";
import k10 from "./images/kurtas/k10.jpg";
import kj1 from "./images/kurtajacket/kj1.jpg";
import kj2 from "./images/kurtajacket/kj2.jpg";
import kj3 from "./images/kurtajacket/kj3.jpg";
import kj4 from "./images/kurtajacket/kj4.jpg";
import kj5 from "./images/kurtajacket/kj5.jpg";
import kj6 from "./images/kurtajacket/kj6.jpg";
import kj7 from "./images/kurtajacket/kj7.jpg";
import kj8 from "./images/kurtajacket/kj8.jpg";
import kj9 from "./images/kurtajacket/kj9.jpg";
import kj10 from "./images/kurtajacket/kj10.jpg";
import i01 from "./images/indowestern/i01.jpg";
import i02 from "./images/indowestern/i02.jpg";
import i03 from "./images/indowestern/i03.jpg";
import i04 from "./images/indowestern/i04.jpg";
import i05 from "./images/indowestern/i05.jpg";
import i06 from "./images/indowestern/i06.jpg";
import i07 from "./images/indowestern/i07.jpg";
import i08 from "./images/indowestern/i08.jpg";
import i09 from "./images/indowestern/i09.jpg";
import i10 from "./images/indowestern/i10.jpg";
import a01 from "./images/accessories/a01.jpg";
import a02 from "./images/accessories/a02.jpg";
import a03 from "./images/accessories/a03.jpg";
import a04 from "./images/accessories/a04.jpg";
import a05 from "./images/accessories/a05.jpg";
import a06 from "./images/accessories/a06.jpg";
import a07 from "./images/accessories/a07.jpg";
import a08 from "./images/accessories/a08.jpg";
import a09 from "./images/accessories/a09.jpg";
import a10 from "./images/accessories/a10.jpg";
import s01 from "./images/sherwani/s01.jpg";
import s02 from "./images/sherwani/s02.jpg";
import s03 from "./images/sherwani/s03.jpg";
import s04 from "./images/sherwani/s04.jpg";
import s05 from "./images/sherwani/s05.jpg";
import s06 from "./images/sherwani/s06.jpg";
import s07 from "./images/sherwani/s07.jpg";
import s08 from "./images/sherwani/s08.jpg";
import s09 from "./images/sherwani/s09.jpg";
import s10 from "./images/sherwani/s10.jpg";



const ShopData=
    {
     kurta:   {
            title: "Kurta",
            id:1,
            routeName:"shop/kurta",
            items:[
                {
                    id:1,
                    name:" Navy Blue Printed Kurta ",
                    imageUrl: k01 ,
                    price: 2999
                },
                {
                    id:2,
                    name:" Classic White Cotton Kurta ",
                    imageUrl: k02 ,
                    price: 1999
                },
                
                {
                    id:3,
                    name:" Classic Black Cotton Kurta ",
                    imageUrl: k03 ,
                    price: 3999
                },
                
                {
                    id:4,
                    name:" Asymmetric Yellow Kurta ",
                    imageUrl: k04 ,
                    price: 2999
                },
                
                {
                    id:5,
                    name:"Asymmetric Designer Kurta ",
                    imageUrl: k05 ,
                    price: 2999
                },
                
                {
                    id:6,
                    name:" Floral Printed Kurta ",
                    imageUrl: k06 ,
                    price: 2999
                },
                {
                    id:7,
                    name:"Green Cotton Kurta ",
                    imageUrl: k07 ,
                    price: 1599
                },
                {
                    id:8,
                    name:" Grey Cotton Kurta ",
                    imageUrl: k08 ,
                    price: 1999
                },
                {
                    id:9,
                    name:" Pink Cotton Kurta ",
                    imageUrl: k09 ,
                    price: 1999
                },
                {
                    id:10,
                    name:" red Cotton Kurta ",
                    imageUrl: k10 ,
                    price: 1999
                }
            ]
        },
       kurtajacket: {
            title: "Kurta Jacket",
            id:2,
            routeName:"shop/kurtajacket",
            items:[
                {
                    id:11,
                    name:"Designer Kurta-Jacket ",
                    imageUrl: kj1 ,
                    price: 7999
                },
                {
                    id:12,
                    name:" Pink Draped Kurta-Jacker",
                    imageUrl: kj2 ,
                    price: 7999
                },
                
                {
                    id:13,
                    name:" Imperial Cream Kurta-Jacket ",
                    imageUrl: kj3 ,
                    price: 6999
                },
                
                {
                    id:14,
                    name:" Young Cream Kurta-Jacket ",
                    imageUrl: kj4 ,
                    price: 7999
                },
                
                {
                    id:15,
                    name:"Alluring Kurta-Jacket ",
                    imageUrl: kj5 ,
                    price: 6999
                },
                
                {
                    id:16,
                    name:" Floral Brick Kurta-Jacket ",
                    imageUrl: kj6 ,
                    price: 6999
                },
                
                {
                    id:17,
                    name:"Modern Yellow Kurta-Jacket ",
                    imageUrl: kj7 ,
                    price: 6999
                },
                
                {
                    id:18,
                    name:"Iconic Blue Kurta-Jacket ",
                    imageUrl: kj8 ,
                    price: 7999
                },
                
                {
                    id:19,
                    name:"Royal Red Kurta-Jacket ",
                    imageUrl: kj9 ,
                    price: 7999
                },
                
                {
                    id:20,
                    name:"Embroided Kurta-Jacket ",
                    imageUrl: kj10 ,
                    price: 6999
                }
            ]
        },
        accessories:{
            title: "Accessories",
            id:3,
            routeName:"shop/accessories",
            items:[
                {
                    id:21,
                    name:"Classic Beige Juti ",
                    imageUrl: a01 ,
                    price: 899
                },
                {
                    id:22,
                    name:"Beige Juti",
                    imageUrl: a02 ,
                    price: 899
                },
                
                {
                    id:23,
                    name:"Opulant Red Juti",
                    imageUrl: a03 ,
                    price: 1299
                },
                
                {
                    id:24,
                    name:"Royal Blue Juti",
                    imageUrl: a04 ,
                    price: 2999
                },
                
                {
                    id:25,
                    name:"Fawn Juti ",
                    imageUrl: a05 ,
                    price: 8999
                },
                
                {
                    id:26,
                    name:"Princely Blue Juti",
                    imageUrl: a06 ,
                    price: 999
                }
                ,
                
                {
                    id:27,
                    name:"Classic Brooch",
                    imageUrl: a07 ,
                    price: 1499
                },
                
                {
                    id:28,
                    name:"Beautiful Brooch",
                    imageUrl: a08 ,
                    price: 1499
                },
                
                {
                    id:29,
                    name:"Black Patiala",
                    imageUrl: a09 ,
                    price: 1999
                },
                
                {
                    id:30,
                    name:"White Patiala",
                    imageUrl: a10 ,
                    price: 999
                }
            ]
        },
        indowestern:{
            title: "Indo-Western",
            id:4,
            routeName:"shop/indowestern",
            items:[
                {
                    id:31,
                    name:"Midnight Blue ",
                    imageUrl: i01 ,
                    price: 16999
                },
                {
                    id:32,
                    name:" Modern Angrakha",
                    imageUrl: i02 ,
                    price: 15999
                },
                
                {
                    id:33,
                    name:" Splendid Green ",
                    imageUrl: i03 ,
                    price: 5999
                },
                
                {
                    id:34,
                    name:" Exquisite Navy Blue",
                    imageUrl: i04 ,
                    price: 11999
                },
                
                {
                    id:35,
                    name:"Black Asymmetric ",
                    imageUrl: i05 ,
                    price: 14999
                },
                
                {
                    id:36,
                    name:"Pearl Grey",
                    imageUrl: i06 ,
                    price: 14999
                }
                ,
                
                {
                    id:37,
                    name:"Pine Green",
                    imageUrl: i07 ,
                    price: 16999
                },
                
                {
                    id:38,
                    name:"Apex Embroided",
                    imageUrl: i08 ,
                    price: 16999
                },
                
                {
                    id:39,
                    name:"Traditional Brown",
                    imageUrl: i09 ,
                    price: 14999
                },
                
                {
                    id:40,
                    name:"Fancy Fawn Patterned",
                    imageUrl: i10 ,
                    price: 14999
                }
            ]
        },
        sherwani: { title: "Sherwani",
        id:4,
        routeName:"shop/sherwani",
        items:[
            {
                id:41,
                name:"Royal Cream",
                imageUrl: s01 ,
                price: 16999
            },
            {
                id:42,
                name:"Luxurious Embroided",
                imageUrl: s02 ,
                price: 14999
            },
            
            {
                id:43,
                name:"Pistachio Green ",
                imageUrl: s03 ,
                price: 19999
            },
            
            {
                id:44,
                name:"Sober Blue",
                imageUrl: s04 ,
                price: 11999
            },
            
            {
                id:45,
                name:"Elegant Biege ",
                imageUrl: s05 ,
                price: 11999
            },
            
            {
                id:46,
                name:"Tradition Beige",
                imageUrl: s06 ,
                price: 16999
            }
            ,
            
            {
                id:47,
                name:"Princely Blue",
                imageUrl: s07 ,
                price: 14999
            },
            
            {
                id:48,
                name:"Evergreen Wine",
                imageUrl: s08 ,
                price: 25999
            },
            
            {
                id:49,
                name:"Traditional ",
                imageUrl: s09 ,
                price: 14999
            },
            
            {
                id:50,
                name:"Merry Blue",
                imageUrl: s10 ,
                price: 14999
            }
        ]
        }
    };


export default ShopData;