const shopActionTypes = {
  FETCH_SHOP_START: "FETCH_SHOP_START",
  FETCH_SHOP_SUCCESS: "FETCH_SHOP_SUCCESS",
  FETCH_SHOP_ERR: "FETCH_SHOP_ERR",
};

const shopActionStart = () => ({ type: shopActionTypes.FETCH_SHOP_START });

const shopActionSucess = (shopData) => ({
  type: shopActionTypes.FETCH_SHOP_SUCCESS,
  payload: shopData,
});

// const shopActionErr = (msg) => ({
//   type: shopActionTypes.FETCH_SHOP_ERR,
//   payload: msg,
// });

// const getShopDataAsync = () => (dispatch) => {
//   dispatch(shopActionStart());

// };

const initState = { data: null, isFetching: false };
const shopDataReducer = (currentState = initState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_SHOP_START:
      return {
        ...currentState,
        isFetching: true,
      };

    case shopActionTypes.FETCH_SHOP_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        data: action.payload,
      };

    default:
      return currentState;
  }
};

const snapDataToMap = (snapData) =>
  snapData.docs.reduce((ac, el) => {
    let data = el.data();
    data.id = el.id;
    return {
      ...ac,
      [data.routeName]: data,
    };
  }, {});

export default shopDataReducer;

export { shopActionTypes, shopActionStart , snapDataToMap , shopActionSucess };
