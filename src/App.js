import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  About,
  Cart,
  CheckOut,
  Error,
  Home,
  Products,
  SingleProduct,
  ProvideRoute,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route
          path='checkout'
          element={
            <ProvideRoute>
              <CheckOut />
            </ProvideRoute>
          }
        />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
