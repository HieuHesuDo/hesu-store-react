import React from "react";
import { connect } from "react-redux";
import {selectCollectionForPreview} from '../../redux/shop/shop.selector.js'
import CollectionPreview from "../collection-preview/collection-preview";

import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollecctionProps }) => (
      <CollectionPreview key={id} {...otherCollecctionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
    collections: selectCollectionForPreview(state)
  })

export default connect(mapStateToProps)(CollectionsOverview)