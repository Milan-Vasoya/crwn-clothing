import React, { useEffect,lazy,Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";
import Spinner from "../spinner/withSpinner.component";


const CollectionOverviewContainer = lazy(() =>
  import("../collection-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../Pages/collection/CollectionPage.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Suspense fallback={<Spinner />}>
      <Route
        exact={true}
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(undefined, mapDispatchToProps)(ShopPage);
