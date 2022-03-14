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
        <Route path="/products" exact element={<ProductList/>} />
      </Routes>
    </Router>
  );
};

export default App;