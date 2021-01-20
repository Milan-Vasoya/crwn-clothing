import React,{useState} from "react";
import shopData from "./shop/shopdata";
import CollectioPreview from "../colloction-Preview/collection-preview";

const ShopPage =()=>{

   
      const [collections,]=useState(shopData);
      

    return(
        <div>
        {
            collections.map((collection)=>
            <CollectioPreview  key={collection.id} title={collection.title} items={collection.items} />
            )
        }
        
        </div>
    );

};


export default ShopPage;