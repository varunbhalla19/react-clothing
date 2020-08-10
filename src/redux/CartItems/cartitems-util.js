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

export default filterItems;
