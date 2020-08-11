import { createSelector } from "reselect";

const getItems = (state) => state.cartItems;

const getItemsLength = createSelector(getItems, (items) =>
  items.reduce((ac, el) => ac + el.quantity, 0)
);

const getTotalPrice = createSelector(getItems, (items) =>
  items.reduce((ac, el) => ac + el.price * el.quantity, 0)
);

export { getItemsLength , getTotalPrice };
