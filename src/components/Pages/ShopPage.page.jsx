import React from "react";
import CollectionOverview from "../collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "./collection/collectio.page";
import { GetCollections } from "../../firebase/firbaseAction";
import { connect } from "react-redux";
import { setCollectionsToShop } from "../../redux/shop/shop.action";
import withSpinner from "../with-Spinner/withSpinner.component";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const { setcollections } = this.props;
    GetCollections()
      .then((collections) => {
        setcollections(collections);
      })
      .then(() => {
        this.setState(() => ({ isLoading: false }));
        console.log(this.state);
      });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact={true}
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setcollections: (collections) => dispatch(setCollectionsToShop(collections)),
});
export default connect(undefined, mapDispatchToProps)(ShopPage);
