import {
  ADD_TO_CART,
  CART_CALCULATE_TOTAL,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_AMOUNT,
} from "../actions";

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItems = state.cart.find((i) => i.id === id + color);
    if (tempItems) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItems = {
        id: id + color,
        color,
        amount,
        name: product.name,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItems] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempItem = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempItem };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === CART_CALCULATE_TOTAL) {
    const { total_items, total_Amount } = state.cart.reduce(
      (total, cartItems) => {
        const { price, amount } = cartItems;

        total.total_items += amount;
        total.total_Amount += amount * price;

        return total;
      },
      {
        total_items: 0,
        total_Amount: 0,
      }
    );

    return { ...state, total_items, total_Amount };
  }

  throw new Error(`No Matching ${action.type} found action type`);
};

export default CartReducer;
