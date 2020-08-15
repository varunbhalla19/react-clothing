import { createSelector } from "reselect";

const getShopData = (state) => state.shopData;

const getPageId = (state, props) => props.match.params.pageId;

// const categorySelector = createSelector(
//   [getShopData, getPageId],
//   (data, pageId) => data.find((el) => el.routeName === pageId)
// );

const categorySelector = createSelector(
  [getShopData, getPageId],
  (data, pageId) => data[pageId]
);

const getShopArray = createSelector(
  [getShopData] , data => Object.values(data) 
)

export {getShopArray} ;

export default categorySelector;
