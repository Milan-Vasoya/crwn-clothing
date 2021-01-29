import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectioPreview from "../colloction-Preview/collection-preview";
import "./collectionOverview.styles.scss";

const CollectionOverview = ({ collections }) => {
  
  return (
    <div className="collection-overview">
      {collections.map((collection) => (
        <CollectioPreview
          key={collection.id}
          routeName={collection.routeName}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
