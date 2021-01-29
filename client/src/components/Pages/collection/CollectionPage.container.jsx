import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import withSpinner from "../../with-Spinner/withSpinner.component";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "../../../redux/shop/shop.selector";
import collectioPage from "./collectio.page";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

export default compose(connect(mapStateToProps), withSpinner)(collectioPage);
