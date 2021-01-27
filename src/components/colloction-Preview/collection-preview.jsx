import React from "react";
import CollectionItem from "../collection-item/collection-Item";
import { withRouter } from 'react-router-dom';

const CollectioPreview = ({ routeName,title, items,history, match}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={()=>(history.push(`${match.url}/${routeName}`))} >{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item ,indx)=>(indx < 4)).map((item) => (
         <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectioPreview);
