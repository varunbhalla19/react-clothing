import { createSelector } from "reselect";

const getShopData = (state) => state.shopData;

const getPageId = (state, props) => props.match.params.pageId;

const categorySelector = createSelector(
  [getShopData, getPageId],
  (data, pageId) => data.find((el) => el.routeName === pageId)
);

export default categorySelector;
