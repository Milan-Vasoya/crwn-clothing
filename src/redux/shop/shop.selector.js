import { createSelector } from "reselect";
import memoization from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);

export const selectCollection = memoization((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching =createSelector(
  [selectShop],
  (shop)=> shop.isFetching
)