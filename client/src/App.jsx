import Home from "./views/Home";
import Cart from "./views/Cart";
import { Login } from "./views/Login";
import Product from "./views/Product";
import { Register } from "./views/Register";
import ProductList  from "./views/ProductList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./views/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> :<Login/>} />
        <Route path="/register" element={user ? <Navigate to="/" /> :<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;