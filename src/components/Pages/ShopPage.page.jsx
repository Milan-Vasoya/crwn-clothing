import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../redux/shop/shop.action";
import CollectionOverviewContainer from "../collection-overview/collection-overview.container";
import CollectionPageContainer from "../Pages/collection/CollectionPage.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact={true}
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(undefined, mapDispatchToProps)(ShopPage);
