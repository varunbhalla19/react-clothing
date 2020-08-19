import { createSelector } from "reselect";

const shopData = (state) => state.shopData;        //  {...}

const getShopData = createSelector([shopData], (data) => data.data);       //  null or {...}

const isLoading = createSelector([getShopData], (data) => !!data);    //   false or true 

const getPageId = (state, props) => props.match.params.pageId;

const categorySelector = createSelector(
  [getShopData, getPageId],
  (data, pageId) => {
    console.log("data and pageId ==> ", data, pageId); 
    return data && data[pageId]  ; 
  } 
);

const getShopArray = createSelector([getShopData], (data) =>
  data && Object.values(data)
);

export { getShopArray, isLoading };

export default categorySelector;
