import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/Product_reducer";
import {
  GET_SINGLE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_LOADING,
  GET_SINGLE_PRODUCTS_SUCCESS,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../actions";

import { products_url as url } from "../Utils/constants.js";
import { useEffect } from "react";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const productsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProduct = async (url) => {
    dispatch({ type: PRODUCTS_LOADING });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCTS_LOADING });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct(url);
  }, []);

  return (
    <productsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </productsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(productsContext);
};
