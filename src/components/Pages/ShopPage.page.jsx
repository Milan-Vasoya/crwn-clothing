import React, { useEffect } from "react";
import CollectionOverview from "../collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CategoryPage from "./collection/collectio.page";
import { GetCollections } from "../../firebase/firbaseAction";
import { connect } from "react-redux";
import { setCollectionsToShop } from "../../redux/shop/shop.action";


const ShopPage = (props) => {
  const { match, setcollections } = props;
  useEffect(() => {
    GetCollections().then((collections) => {
      setcollections(collections);
    });
  }, [setcollections]);
  return (
    <div>
      <Route
        exact={true}
        path={`${match.path}`}
        component={CollectionOverview}
      />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setcollections: (collections) => dispatch(setCollectionsToShop(collections)),
});
export default connect(undefined, mapDispatchToProps)(ShopPage);
