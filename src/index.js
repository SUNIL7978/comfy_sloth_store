import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/Product_Context";
import { FilterProvider } from "./context/Filter_Context";
import { CartProvider } from "./context/Cart_Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/User_context";

//dev-5ihef3ec24bkq4x6.us.auth0.com

//l5fCEjqlc9XtJMZNirbY5lu9xDv8tDb7

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain='dev-5ihef3ec24bkq4x6.us.auth0.com'
    clientId='l5fCEjqlc9XtJMZNirbY5lu9xDv8tDb7'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </UserProvider>
  </Auth0Provider>
);
