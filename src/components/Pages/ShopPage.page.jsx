import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectioPreview from "../colloction-Preview/collection-preview";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map((collection) => (
        <CollectioPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
