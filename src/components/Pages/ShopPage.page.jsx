import React from "react";
import CollectionOverview from "../collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "./collection/collectio.page";
import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../redux/shop/shop.action";
import withSpinner from "../with-Spinner/withSpinner.component";
import {  createStructuredSelector} from 'reselect';
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  
  componentDidMount() {
    const {fetchCollectionsAsync} = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    
    return (
      <div>
        <Route
          exact={true}
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync:()=>dispatch(fetchCollectionsAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
