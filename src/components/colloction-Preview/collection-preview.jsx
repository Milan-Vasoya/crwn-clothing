import React from "react";
import CollectionItem from "../collection-item/collection-Item";

const CollectioPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item ,indx)=>(indx < 4)).map((item) => (
         <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectioPreview;
