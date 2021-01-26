import React from "react";
import CollectionOverview from "../collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CategoryPage from "./collection/collectio.page";

const ShopPage = ({ match }) => {

  return (
    <div>
      <Route exact={true} path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
