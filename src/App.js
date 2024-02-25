import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from './Heading';
import Middle from './Middle';
import { useState } from 'react';
import Footer from './Footer';





function App() {
  const  [cart, newCart] = useState (0)
  

  let products = [
    {productName: "Yellow Nylon-Jacket",
    notprice : "1266",
     price : "799",
     image : "https://img3.junaroad.com/uiproducts/20325240/zoom_0-1695296063.jpg" 
  },
  {productName: "Straight Kurti",
   notprice : "759",
   price : "399",
   image : "https://img3.junaroad.com/uiproducts/18404813/zoom_0-1655304569.jpg" 
},
{productName: "Formal-Shirt",
notprice : "1299",
 price : "600",
 image : "https://img3.junaroad.com/uiproducts/19919551/zoom_0-1685463811.jpg" 
},
{productName: "Semi-Stitched-Red",
notprice : "999",
 price : "555",
 image : "https://img3.junaroad.com/uiproducts/18531606/zoom_0-1663680455.jpg" 
},
{productName: "Semi-Stitched-Blue",
notprice : "1555",
 price : "799",
 image : "https://img3.junaroad.com/uiproducts/19819999/zoom_0-1683468817.jpg" 
},
{productName: "Line Dress - Green",
notprice : "1999",
 price : "759",
 image : "https://www.fablestreet.com/cdn/shop/products/Peter_20Pan_20Collar_20Pleated_20A_20Line_20Dress_20-_20Green_L1_800x.jpg?v=1615471285https://www.fablestreet.com/cdn/shop/products/Peter_20Pan_20Collar_20Pleated_20A_20Line_20Dress_20-_20Green_L1_800x.jpg?v=1615471285" 
},
{productName: " Black T-Shirt",
notprice : "750",
 price : "399",
 image : "https://img3.junaroad.com/uiproducts/20851064/zoom_0-1705590901.jpg" 
},
{productName: "Track Suit",
notprice : "1600",
 price : "899",
 image : "https://img3.junaroad.com/uiproducts/20409287/zoom_0-1697158651.jpg" 
},
{productName: "Kurta Kurtis",
notprice : "900",
 price : "699",
 image : "https://img3.junaroad.com/uiproducts/20932733/zoom_0-1706931087.jpg" 
},
{productName: "Peach Cotton",
notprice : "800",
 price : "400",
 image : "https://img3.junaroad.com/uiproducts/20895336/zoom_1-1707934411.jpg" 
},
{productName: "Women Red Sequin",
notprice : "1700",
 price : "800",
 image : "https://img3.junaroad.com/uiproducts/20820703/zoom_0-1707231151.jpg" 
},
{productName: "Georgette Short Kurti",
notprice : "1300",
 price : "900",
 image : "https://img3.junaroad.com/uiproducts/20012918/zoom_0-1687950120.jpg" 
}

  ]
  return (
    <>
  
    <div className="container">
    <Heading cart={cart}/>
    <Middle></Middle>
      <div className="row">
      {
      products.map((card)=> {
        return <Card card = {card} cart={cart} newCart={newCart}/>

      })
     }
      </div>
      <br />
      <Footer/>
    </div>
    </>
  );
}

export default App;