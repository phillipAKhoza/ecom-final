import Home from "./views/Home";
import Cart from "./views/Cart";
import { Login } from "./views/Login";
import Product from "./views/Product";
import { Register } from "./views/Register";
import ProductList  from "./views/ProductList";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
        <Route path="/"  element={<Home/>} />
    </Routes>
  );
};

export default App;