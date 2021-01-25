import React from "react";

import CollectionItem from "../../collection-item/collection-Item";
import "./collection.styles.scss";
import { connect } from "react-redux";
import {selectCollection  } from "../../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
  const {title,items}=collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className='items'>
      {
        items.map((item)=><CollectionItem key={item.id}  item={item} />)
      }
      </div>
    </div>
  );
};

const mapStateToProps=(state,props)=>({
    collection:selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
