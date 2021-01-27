import CollectionOverview from "./collectionOverview.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import withSpinner from "../with-Spinner/withSpinner.component";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);
