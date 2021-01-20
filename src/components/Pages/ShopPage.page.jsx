import React,{useState} from "react";
import shopData from "./shop/shopdata";

const ShopPage =()=>{

   
      const [collection, setCollection]=useState(shopData);
      

    return(
        <div>
        hii this is shop page
        </div>
    );

};


export default ShopPage;