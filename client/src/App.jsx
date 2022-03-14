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
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/products/:category" exact element={<ProductList/>} />
        <Route path="/product/:id" exact element={<Product/>} />
        <Route path="/cart" exact element={<Product/>} />
        <Route path="/product/:id" exact element={<Product/>} />
        <Route path="/product/:id" exact element={<Product/>} />
      </Routes>
    </Router>
  );
};

export default App;