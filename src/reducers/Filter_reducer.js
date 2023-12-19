import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filter: {
        ...state.filter,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { filtered_products, sort } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-low") {
      tempProducts = filtered_products.sort(
        (cEl, nEl) => cEl.price - nEl.price // cEl=CurrentElement and nEl=NextElement
      );
    }
    if (sort === "price-high") {
      tempProducts = filtered_products.sort(
        (cEl, nEl) => nEl.price - cEl.price
      );
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((cEl, nEl) =>
        cEl.name.localeCompare(nEl.name)
      );
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((cEl, nEl) =>
        nEl.name.localeCompare(cEl.name)
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, price, colors, shipping } = state.filter;

    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (colors !== "all") {
      tempProducts = tempProducts.filter((product) =>
        product.colors.find((c) => c === colors)
      );
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter: {
        ...state.filter,
        text: "",
        category: "all",
        colors: "all",
        company: "all",
        price: state.filter.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching ${action.type} action type`);
};

export default filterReducer;
