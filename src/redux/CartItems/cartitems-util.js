const filterItems = (cartArray, cartItem) => {
  if (!cartArray.length) {
    return [{ ...cartItem, quantity: 1 }];
  }

  let item = cartArray.find((el) => el.id === cartItem.id);

  if (item) {
    return cartArray.map((el) => {
      return el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el;
    });
  }
  return cartArray.concat({ ...cartItem, quantity: 1 });
};

// const filterr = (cartArray, cartItem) =>
//   cartArray.length
//     ? cartArray.reduce(
//         (ar, el) =>
//           el.id === cartItem.id
//             ? ar.concat({ ...el, quantity: el.quantity + 1 })
//             : ar.concat(el),
//         []
//       )
//     : [{ ...cartItem, quantity: 1 }];

const removeFromCart = (cartArray, cartItemId) =>
  cartArray.filter((el) => el.id !== cartItemId);

const incItemCart = (cartArray, cartItemId) =>
  cartArray.map((el) =>
    el.id === cartItemId ? { ...el, quantity: el.quantity + 1 } : el
  );

const decItemCart = (cartArray, cartItemId) =>
  cartArray.reduce(
    (ac, el) =>
      el.id === cartItemId
        ? el.quantity > 1
          ? ac.concat({ ...el, quantity: el.quantity - 1 })
          : ac
        : ac.concat(el),
    []
  );

const getCartItemsCount = (cartItems) =>
  cartItems.reduce((ac, el) => ac + el.quantity, 0);

const getCartPrice = (items) =>
  items.reduce((ac, el) => ac + el.price * el.quantity, 0);

export default filterItems;
export {
  removeFromCart,
  getCartPrice,
  incItemCart,
  decItemCart,
  getCartItemsCount,
};
